"use server";

import db from "@/src/db";
import { eq } from "drizzle-orm";

import { dailyFitnessData, userData, users } from "@/src/db/schema";
import { UserType } from "@/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const addUserData = async (email: string, userFormData: string[]) => {
  try {
    // Get user data
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });

    const today = new Date().toISOString().split("T")[0];
    const session = await getServerSession(authOptions);

    const { id } = user as UserType;

    const stepsGoal = +userFormData[5];

    const newUserData = {
      userId: id,
      gender: userFormData[0],
      age: +userFormData[1],
      height: +userFormData[2],
      weight: +userFormData[3],
      goal: userFormData[4],
      stepsGoal,
    };

    // Insert new user data
    await db.insert(userData).values(newUserData);

    // Update isNewUser to false
    await db
      .update(users)
      .set({ isNewUser: false })
      .where(eq(users.email, email));

    // Create user fitness data
    await db
      .insert(dailyFitnessData)
      .values({ userId: id, stepsGoal, date: today });

    session && (session.user.isNewUser = false);

    return { status: "success", message: "User data added successfully" };
  } catch (error) {
    return { status: "error", message: "Failed to add user data" };
  }
};
