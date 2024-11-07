"use server";

import db from "@/src/db";
import { userData, users } from "@/src/db/schema";
import { UserSessionType } from "@/types";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const addUserData = async (
  session: { user: UserSessionType },
  userFormData: string[]
) => {
  try {
    // Get user id from session
    const { id } = session.user;

    const newUserData = {
      userId: id,
      gender: userFormData[0],
      age: +userFormData[1],
      height: +userFormData[2],
      weight: +userFormData[3],
      goal: userFormData[4],
    };

    // Insert new user data
    await db.insert(userData).values(newUserData);

    // Update isNewUser to false
    await db.update(users).set({ isNewUser: false }).where(eq(users.id, id));

    return { status: "success", message: "User data added successfully" };
  } catch (error) {
    console.log(error);
    return { status: "error", message: "Failed to add user data" };
  }
};
