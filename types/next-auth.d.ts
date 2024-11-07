import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      subscriptionLevel: string;
      isNewUser: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    subscriptionLevel: string;
    isNewUser: boolean;
  }
}
