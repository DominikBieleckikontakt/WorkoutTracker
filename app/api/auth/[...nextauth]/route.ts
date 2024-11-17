import { UserType } from "@/types";
import NextAuth, { Profile, Session, SessionStrategy, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcrypt";

import db from "@/src/db";
import { users } from "@/src/db/schema";

export const authOptions = {
  debug: true,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
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

        // Validate credentials
        if (
          !credentials?.email ||
          !emailRegex.test(credentials?.email as string)
        ) {
          throw new Error("Invalid email address");
        }

        if (
          !credentials?.password ||
          !passwordRegex.test(credentials?.password)
        ) {
          throw new Error("Invalid password");
        }

        // Check login data
        const user = await db.query.users.findFirst({
          where: (users, { eq }) =>
            eq(users.email, credentials?.email as string),
        });

        if (!user) {
          throw new Error("User not found");
        }

        if (
          user &&
          bcrypt.compareSync(credentials?.password as string, user.password!)
        ) {
          // Add rememberMe to user

          return user;
        } else {
          throw new Error("Invalid password");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  callbacks: {
    async signIn({ user, profile }: any) {
      const existingUser = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, user?.email as string),
      });

      if (!existingUser) {
        await db.insert(users).values({
          email: profile?.email as string,
          name: profile?.name as string,
          subscriptionLevel: "Basic",
          isNewUser: true,
        });
      }
      return true;
    },
    async jwt({ token, user }: { token: any; user?: User }) {
      // Add subscriptionLevel to token
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.subscriptionLevel = user.subscriptionLevel;
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      // Add subscriptionLevel from token to session
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.subscriptionLevel = token.subscriptionLevel;
      }

      return session;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return url.startsWith(baseUrl) ? url : baseUrl + "/dashboard";
    },
  },
  pages: {
    signIn: "/authentication/login",
    newUser: "/authentication/signup",
  },
  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
