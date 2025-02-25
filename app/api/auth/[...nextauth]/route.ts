import NextAuth, { Session, SessionStrategy, User, Account } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcrypt";
import db from "@/src/db";
import { users } from "@/src/db/schema";
import { eq } from "drizzle-orm";
import { refreshGoogleToken } from "@/actions/refreshGoogleToken";

export const authOptions = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          scope:
            "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.heart_rate.read https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.nutrition.read https://www.googleapis.com/auth/fitness.sleep.read",
          access_type: "offline", // Add this line
          prompt: "consent", // Add this line to ensure the refresh token is returned
        },
      },
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,32}$/;

        if (!credentials?.email || !emailRegex.test(credentials?.email)) {
          throw new Error("Invalid email address");
        }

        if (
          !credentials?.password ||
          !passwordRegex.test(credentials?.password)
        ) {
          throw new Error("Invalid password");
        }

        const user = await db.query.users.findFirst({
          where: (users, { eq }) => eq(users.email, credentials.email),
        });

        if (!user) throw new Error("User not found");

        const isValidPassword = bcrypt.compareSync(
          credentials.password,
          user.password!
        );
        if (!isValidPassword) throw new Error("Invalid password");

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  callbacks: {
    async signIn({ user, account }: { user: any; account: Account | null }) {
      const existingUser = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, user.email),
      });

      if (account?.provider === "google") {
        if (existingUser) {
          await db
            .update(users)
            .set({
              googleAccessToken: account.access_token,
              googleRefreshToken: account.refresh_token,
            })
            .where(eq(users.email, user.email));

          user.id = existingUser.id;
        } else {
          const newUser = await db
            .insert(users)
            .values({
              email: user.email,
              name: user.name,
              googleAccessToken: account.access_token,
              googleRefreshToken: account.refresh_token,
              subscriptionLevel: "Basic",
              isNewUser: true,
            })
            .returning()
            .then((result) => result[0]);

          user.id = newUser.id;
        }
      } else if (!existingUser) {
        const newUser = await db
          .insert(users)
          .values({
            email: user.email,
            name: user.name,
            subscriptionLevel: "Basic",
            isNewUser: true,
          })
          .returning()
          .then((result) => result[0]);

        user.id = newUser.id;
      } else {
        user.id = existingUser.id;
      }

      return true;
    },
    async jwt({
      token,
      user,
      account,
    }: {
      token: any;
      user?: User | null;
      account?: Account | null;
    }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.subscriptionLevel = (user as any).subscriptionLevel || "Basic";
        token.isNewUser = (user as any).isNewUser ?? false;
      }
      if (account?.provider === "google") {
        token.googleAccessToken = account.access_token;
        token.googleRefreshToken = account.refresh_token;
        token.googleAccessTokenExpires =
          Date.now() + (account.expires_at! * 1000 || 3600 * 1000); // 1 hour default
      }

      if (
        token.googleAccessTokenExpires &&
        Date.now() > token.googleAccessTokenExpires
      ) {
        try {
          const refreshedToken = await refreshGoogleToken(token.email!);
          token.googleAccessToken = refreshedToken.access_token;
          token.googleAccessTokenExpires = Date.now() + 3600 * 1000;
        } catch (error) {
          console.error("Failed to refresh Google token:", error);
          token.googleAccessToken = undefined;
        }
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.subscriptionLevel = token.subscriptionLevel || "Basic";
      session.user.googleAccessToken = token.googleAccessToken;
      session.user.isNewUser = token.isNewUser ?? false;
      return session;
    },
  },
  pages: {
    signIn: "/authentication/login",
    newUser: "/onboarding",
  },
  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
