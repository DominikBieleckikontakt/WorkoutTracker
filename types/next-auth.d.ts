import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      // Dodaj subscriptionLevel do sesji użytkownika
      subscriptionLevel: string;
    } & DefaultSession["user"];
  }

  interface User {
    // Dodaj subscriptionLevel do typu User
    subscriptionLevel: string;
  }
}
