"use client";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { toPercent } from "@/constants";

const CaloriesBalance = () => {
  const [consumedCalories, setConsumedCalories] = useState(1900);
  const [consumedCaloriesGoal, setConsumedCaloriesGoal] = useState(2500);

  const [burnedCalories, setBurnedCalories] = useState(200);
  const [burnedCaloriesGoal, setBurnedCaloriesGoal] = useState(500);

  return (
    <div className="pb-5 h-full">
      <h4 className="text-xl font-semibold mb-3">Calorie balance</h4>
      <div className="space-y-10 h-full">
        <div>
          <p>Calories consumed:</p>
          <div className="relative">
            <Progress
              value={
                toPercent(consumedCalories, consumedCaloriesGoal) >= 100
                  ? 100
                  : toPercent(consumedCalories, consumedCaloriesGoal)
              }
              className="h-5 bg-gray-200 dark:bg-neutral-700 absolute top-0 left-0"
            />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 text-sm font-semibold">
              {consumedCalories} / {consumedCaloriesGoal}
            </div>
          </div>
        </div>
        <div>
          <p>Calories burned:</p>
          <div className="relative">
            <Progress
              value={
                toPercent(burnedCalories, burnedCaloriesGoal) >= 100
                  ? 100
                  : toPercent(burnedCalories, burnedCaloriesGoal)
              }
              className="h-5 bg-gray-200 dark:bg-neutral-700 absolute top-0 left-0"
            />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 text-sm font-semibold">
              {burnedCalories} / {burnedCaloriesGoal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaloriesBalance;
