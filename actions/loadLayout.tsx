// actions/load-layout.ts
"use server";

import db from "@/src/db";
import { userLayouts } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export async function loadLayout(userId: string) {
  const result = await db
    .select()
    .from(userLayouts)
    .where(eq(userLayouts.userId, userId))
    .execute();

  return (result[0]?.cardOrder as string[]) || null;
}
