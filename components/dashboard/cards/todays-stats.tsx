"use client";
import { Bed, Clock, Dumbbell, Flame } from "lucide-react";
import React, { useState } from "react";

const TodaysStats = () => {
  const [sleepTime, setSleepTime] = useState({
    start: "22:00",
    startNumber: 22,
    end: "8:00",
    endNumber: 8,
  });
  const [burnedCalories, setBurnedCalories] = useState(234);
  const [caloriesGoal, setCaloriesGoal] = useState(500);
  const [timeSpent, setTimeSpent] = useState(50);
  const [lastTrainingName, setLastTrainingName] = useState("Push-ups");

  const calcedSleepTime =
    sleepTime.startNumber > sleepTime.endNumber
      ? 24 - sleepTime.startNumber + sleepTime.endNumber
      : sleepTime.endNumber - sleepTime.startNumber;

  return (
    <div className="h-full">
      <h4 className="text-xl font-semibold mb-3">Today's stats</h4>
      <div className="space-y-5">
        <div className="flex gap-1 flex-wrap">
          <div className="flex gap-2 items-center">
            <Bed className="size-5" />
            <p>Your sleep time:</p>
          </div>
          <p className="font-semibold">
            {sleepTime.start} - {sleepTime.end} (
            <span
              className={`${
                calcedSleepTime < 7 ? "text-red-500" : "text-green-500"
              }`}
            >
              {calcedSleepTime} hours
            </span>
            )
          </p>
        </div>
        <div className="flex gap-1 flex-wrap">
          <div className="flex gap-2 items-center">
            <Flame className="size-5" />
            <p>Calories you burned: </p>
          </div>
          <p className="font-semibold">
            {burnedCalories} / {caloriesGoal}
          </p>
        </div>
        <div className="flex gap-1 flex-wrap">
          <div className="flex gap-2 items-center">
            <Clock className="size-5" />
            <p>Time you spent on sport: </p>
          </div>
          <p
            className={`font-semibold ${
              timeSpent > 30 ? "text-green-500" : "text-red-500"
            }`}
          >
            {timeSpent} minutes
          </p>
        </div>
        <div className="flex gap-1 flex-wrap">
          <div className="flex gap-2 items-center">
            <Dumbbell className="size-5" />
            <p>Last training you did: </p>
          </div>
          <p className={`font-semibold`}>{lastTrainingName}</p>
        </div>
      </div>
    </div>
  );
};

export default TodaysStats;
