// import { UserType } from "@/types";
// import NextAuth, { Profile, Session, SessionStrategy, User } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google";
// import bcrypt from "bcrypt";

// import db from "@/src/db";
// import { users } from "@/src/db/schema";

// export const authOptions = {
//   debug: true,
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID!,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//     }),
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           placeholder: "email@example.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         const passwordRegex =
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,32}$/;

//         // Validate credentials
//         if (
//           !credentials?.email ||
//           !emailRegex.test(credentials?.email as string)
//         ) {
//           throw new Error("Invalid email address");
//         }

//         if (
//           !credentials?.password ||
//           !passwordRegex.test(credentials?.password)
//         ) {
//           throw new Error("Invalid password");
//         }

//         // Check login data
//         const user = await db.query.users.findFirst({
//           where: (users, { eq }) =>
//             eq(users.email, credentials?.email as string),
//         });

//         if (!user) {
//           throw new Error("User not found");
//         }

//         if (
//           user &&
//           bcrypt.compareSync(credentials?.password as string, user.password!)
//         ) {
//           // Add rememberMe to user
//           return user;
//         } else {
//           throw new Error("Invalid password");
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt" as SessionStrategy,
//   },
//   callbacks: {
//     async signIn({ user, profile }: any) {
//       // Check if the user exists in the database
//       const existingUser = await db.query.users.findFirst({
//         where: (users, { eq }) => eq(users.email, user?.email as string),
//       });

//       if (!existingUser) {
//         // If not found, create the user
//         const newUser = await db
//           .insert(users)
//           .values({
//             email: profile?.email as string,
//             name: profile?.name as string,
//             subscriptionLevel: "Basic",
//             isNewUser: true,
//           })
//           .returning()
//           .then((result) => result[0]);

//         // Update the user object with the correct user ID from the database
//         user.id = newUser.id;
//       } else {
//         // If user exists, update the user ID in the session
//         user.id = existingUser.id;
//       }

//       return true;
//     },
//     async jwt({ token, user }: { token: any; user?: User }) {
//       // Add user data to token
//       if (user) {
//         token.id = user.id;
//         token.name = user.name;
//         token.email = user.email;
//         token.subscriptionLevel = user.subscriptionLevel || "Basic";
//       }

//       return token;
//     },
//     async session({ session, token }: { session: Session; token: any }) {
//       // Add user data from token to session
//       session.user.id = token.id;
//       session.user.name = token.name;
//       session.user.email = token.email;
//       session.user.subscriptionLevel = token.subscriptionLevel || "Basic";

//       return session;
//     },
//   },
//   pages: {
//     signIn: "/authentication/login",
//     newUser: "/authentication/signup",
//   },
//   secret: process.env.AUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
import { UserType } from "@/types";
import NextAuth, {
  Profile,
  Session,
  SessionStrategy,
  User,
  Account,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcrypt";
import db from "@/src/db";
import { users } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export const authOptions = {
  debug: true,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          scope:
            "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.heart_rate.read https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.nutrition.read https://www.googleapis.com/auth/fitness.sleep.read",
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
        token.isNewUser = user.isNewUser;
      }
      if (account?.provider === "google") {
        token.googleAccessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.subscriptionLevel = token.subscriptionLevel || "Basic";
      session.user.googleAccessToken = token.googleAccessToken;
      session.user.isNewUser = token.isNewUser;
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
