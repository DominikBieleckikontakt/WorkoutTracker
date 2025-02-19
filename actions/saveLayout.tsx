"use server";

import db from "@/src/db";
import { userLayouts } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export async function saveLayout(userId: string, cardOrder: string[]) {
  await db
    .insert(userLayouts)
    .values({ userId, cardOrder })
    .onConflictDoUpdate({ target: userLayouts.userId, set: { cardOrder } });
}
