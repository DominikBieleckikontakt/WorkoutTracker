"use server";
import db from "@/src/db";

export const getGoogleFitData = async (userEmail: string) => {
  try {
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, userEmail),
    });

    if (!user?.googleAccessToken) {
      throw new Error("User didn't connect his account with Google");
    }

    const now = new Date();
    const startOfDay = new Date(now.setHours(0, 0, 0, 0)).getTime();

    const res = await fetch(
      "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.googleAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aggregateBy: [
            { dataTypeName: "com.google.activity.segment" },
            { dataTypeName: "com.google.step_count.delta" },
            { dataTypeName: "com.google.calories.expended" },
            { dataTypeName: "com.google.distance.delta" },
            { dataTypeName: "com.google.heart_rate.bpm" },
            { dataTypeName: "com.google.weight" },
            { dataTypeName: "com.google.sleep.segment" },
          ],
          scope: [
            "openid",
            "email",
            "profile",
            "https://www.googleapis.com/auth/fitness.activity.read",
            "https://www.googleapis.com/auth/fitness.body.read",
            "https://www.googleapis.com/auth/fitness.heart_rate.read",
            "https://www.googleapis.com/auth/fitness.sleep.read",
            "https://www.googleapis.com/auth/fitness.nutrition.read",
          ],
          bucketByTime: { durationMillis: 86400000 },
          startTimeMillis: startOfDay,
          endTimeMillis: now.getTime(),
        }),
      }
    );

    return await res.json();
  } catch (error) {
    return { message: "Something went wrong!", data: error };
  }
};
