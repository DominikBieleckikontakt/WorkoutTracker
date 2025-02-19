"use server";

import db from "@/src/db";
import { users } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export const refreshGoogleToken = async (userEmail: string) => {
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, userEmail),
  });

  if (!user?.googleRefreshToken) {
    throw new Error("Missing refresh token!");
  }

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.AUTH_GOOGLE_ID!,
      client_secret: process.env.AUTH_GOOGLE_SECRET!,
      refresh_token: user.googleRefreshToken!,
      grant_type: "refresh_token",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to refresh token: ${data.error}`);
  }

  await db
    .update(users)
    .set({ googleAccessToken: data.access_token })
    .where(eq(users.email, userEmail));

  return { access_token: data.acces_token, expires_in: data.expires_in };
};
