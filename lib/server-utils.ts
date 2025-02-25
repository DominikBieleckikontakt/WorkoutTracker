import db from "@/src/db";
import { users, dailyFitnessData, fitnessHistory } from "@/src/db/schema";
import { and, eq } from "drizzle-orm";
import { refreshGoogleToken } from "@/actions/refreshGoogleToken";
import { GoogleFitDataArrayType } from "@/types";
import { calculateUserData } from "./utils";

export const extractGoogleFitData = (data: any) => {
  if (!data?.bucket || data.bucket.length === 0) {
    return null;
  }

  // Define a mapping of Google Fit data types to user-friendly labels
  const dataTypeLabels: Record<string, string> = {
    "com.google.activity.summary": "Activity",
    "com.google.step_count.delta": "Steps",
    "com.google.distance.delta": "Distance (meters)",
    "com.google.calories.expended": "Calories Burned",
    "com.google.heart_rate.summary": "Heart Rate (BPM)",
    "com.google.active_minutes": "Active Minutes",
    "com.google.weight": "Weight",
    "com.google.height": "Height",
    "com.google.sleep.segment": "Sleep",
  };

  return data.bucket.map((bucket: any) => {
    const startTime = new Date(parseInt(bucket.startTimeMillis));
    const endTime = new Date(parseInt(bucket.endTimeMillis));

    // Extract data points from the dataset
    const extractedData = bucket.dataset.flatMap((dataset: any) =>
      dataset.point.map((point: any) => {
        const dataType = point.dataTypeName;
        return {
          dataType,
          dataLabel: dataTypeLabels[dataType] || "Unknown", // Add a readable label
          value: point.value.map(
            (val: any) => val.intVal || val.fpVal || val.stringVal
          ),
          startTime: new Date(parseInt(point.startTimeNanos) / 1e6), // Convert nanos to millis
          endTime: new Date(parseInt(point.endTimeNanos) / 1e6),
        };
      })
    );

    return {
      startTime,
      endTime,
      data: extractedData,
    };
  });
};

export const syncUserData = async (userEmail: string) => {
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, userEmail),
  });

  if (!user) {
    throw new Error("User not found");
  }

  const today = new Date().toISOString().split("T")[0];

  const todayFitnessData = await db.query.dailyFitnessData.findFirst({
    where: (fitnessData, { eq }) => and(eq(fitnessData.userId, user.id)),
  });

  // const isAlreadyInHistory = await db.query.fitnessHistory.findFirst({
  //   where: (fitnessData, { eq }) =>
  //     and(eq(fitnessData.userId, user.id), eq(fitnessData.date, today)),
  // });

  //Check if today's data is already in the history

  if (
    todayFitnessData &&
    todayFitnessData.date !== today
    // && !isAlreadyInHistory
  ) {
    const { id, date, userId, ...insertData } = todayFitnessData;

    // Add the new data to the fitnessHistory table

    await db
      .insert(fitnessHistory)
      .values({ ...todayFitnessData, id: crypto.randomUUID() })
      .onConflictDoUpdate({
        target: [fitnessHistory.userId, fitnessHistory.date],
        set: insertData,
      });

    // Clear the dailyFitnessData table and add a new date

    await db
      .update(dailyFitnessData)
      .set({
        date: today,
      })
      .where(eq(dailyFitnessData.userId, user.id));
  }

  if (user.googleAccessToken) {
    // Sync data from Google Fit
    let accessToken = user.googleAccessToken;

    const now = new Date();
    const startOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    ).getTime();
    const currentTime = now.getTime();

    const fetchData = async (token: string) => {
      const response = await fetch(
        "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
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
            bucketByTime: { durationMillis: 86400000 }, // 24 hours
            startTimeMillis: startOfDay,
            endTimeMillis: currentTime,
          }),
        }
      );

      const data = await response.json(); // Read body once

      if (response.status === 401) {
        console.log("Access token expired, attempting refresh...");
        return null;
      }

      return data;
    };

    // First attempt with the existing token
    let data = await fetchData(accessToken);

    // If unauthorized, refresh token and retry
    if (!data) {
      const { access_token: accessToken } = await refreshGoogleToken(
        user.googleRefreshToken!
      );
      if (!accessToken) throw new Error("Failed to refresh token");

      // Save new access token
      await db
        .update(users)
        .set({ googleAccessToken: accessToken })
        .where(eq(users.email, userEmail));

      data = await fetchData(accessToken);
    }

    const extractedData = JSON.parse(
      JSON.stringify(extractGoogleFitData(data), null, 2)
    )[0];

    const filteredData = extractedData.data.filter(
      (item: GoogleFitDataArrayType) => item.dataLabel !== "Activity"
    );

    const formattedData = {
      ...extractedData,
      data: filteredData,
    };

    try {
      if (formattedData) {
        const userData = await db.query.userData.findFirst({
          where: (userData, { eq }) => eq(userData.userId, user.id),
        });

        if (userData) {
          // Extract data points from the dataset to object like {"Steps": 1000} (dataLabel: value)
          // To get the data from object use Object["key"], it will return value

          const dataMap = Object.fromEntries(
            formattedData.data.map((item: GoogleFitDataArrayType) => [
              item.dataLabel,
              item.value[0],
            ])
          );

          const userCalculatedGoals = calculateUserData(
            userData.age,
            userData.height,
            userData.weight,
            userData.goal,
            userData.gender,
            userData.activityLevel
          );

          await db
            .update(dailyFitnessData)
            .set({
              steps: dataMap["Steps"] ?? dailyFitnessData?.steps,
              burnedCalories: Math.ceil(
                dataMap["Calories Burned"] ??
                  dailyFitnessData?.burnedCalories ??
                  0
              ),
              heartRate:
                dataMap["Heart Rate (BPM)"] ?? dailyFitnessData?.heartRate,
              sleep: dataMap["Sleep"] ?? dailyFitnessData?.sleep,
              burnCaloriesGoal: Math.ceil(userCalculatedGoals.burnCaloriesGoal),
              caloriesGoal: Math.ceil(userCalculatedGoals.caloriesGoal),
              proteinsGoal: Math.ceil(userCalculatedGoals.proteinsGoal),
              fatGoal: Math.ceil(userCalculatedGoals.fatGoal),
              carbsGoal: Math.ceil(userCalculatedGoals.carbsGoal),
            })
            .where(
              and(
                eq(dailyFitnessData.userId, user.id),
                eq(dailyFitnessData.date, today)
              )
            );
        }
      }
    } catch (error) {
      throw new Error("Something went wrong");
    }

    return {
      message: "Data synced successfully with Google Fit!",
      data: formattedData,
    };
  }
};

export const getTodayFitnessData = async (userEmail: string) => {
  const user = await db.query.users.findFirst({
    where: (userData, { eq }) => eq(userData.email, userEmail),
  });

  if (!user) {
    throw new Error("User not found!");
  }

  const todayFitnessData = await db.query.dailyFitnessData.findFirst({
    where: (dailyFitnessData, { eq }) => eq(dailyFitnessData.userId, user.id),
  });

  return todayFitnessData;
};
