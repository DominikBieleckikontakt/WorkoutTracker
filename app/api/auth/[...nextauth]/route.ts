import Credentials from "next-auth/providers/credentials";
import NextAuth, { Session, User } from "next-auth";
import db from "@/src/db";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
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
        // Check login data
        const user = await db.query.users.findFirst({
          where: (users, { eq }) =>
            eq(users.email, credentials?.email as string),
        });

        if (
          user &&
          bcrypt.compareSync(credentials?.password as string, user.password)
        )
          return user;
        return null;
      },
    }),
  ],
  callbacks: {
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
  },
  pages: {
    signIn: "/authentication/login",
    newUser: "/authentication/signup",
  },
  secret: process.env.AUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
