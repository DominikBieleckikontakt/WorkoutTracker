"use server";

import db from "@/src/db";
import { eq } from "drizzle-orm";

import { userData, users } from "@/src/db/schema";
import { UserType } from "@/types";

export const addUserData = async (email: string, userFormData: string[]) => {
  try {
    // Get user data
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });

    const { id } = user as UserType;

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
    await db
      .update(users)
      .set({ isNewUser: false })
      .where(eq(users.email, email));

    return { status: "success", message: "User data added successfully" };
  } catch (error) {
    console.log(error);
    return { status: "error", message: "Failed to add user data" };
  }
};
