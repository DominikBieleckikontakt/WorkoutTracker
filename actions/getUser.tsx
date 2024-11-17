"use server";

import db from "@/src/db";
import { UserType } from "@/types";

export const getUser = async (email: string) => {
  try {
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email!),
    });

    const userData: UserType = user!;

    return { message: "User found", data: userData };
  } catch (error) {
    return { message: "User not found", data: error };
  }
};
