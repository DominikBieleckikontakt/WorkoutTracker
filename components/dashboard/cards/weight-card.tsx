"use client";
import React, { useState } from "react";

const WeightCard = () => {
  const [weightLost, setWeightLost] = useState(5);
  const [weight, setWeight] = useState(85);
  const [weightGoal, setWeightGoal] = useState(70);
  const [timeLeft, setTimeLeft] = useState("2 months");

  return (
    <div className="h-full">
      <h4 className="text-xl font-semibold mb-3">Your weight</h4>
      <div className="space-y-8">
        <div className="space-y-3">
          <p>
            Your current weight:{" "}
            <span className="font-semibold">{weight} kg</span>
          </p>
          <p>
            Your weight goal:{" "}
            <span className="font-semibold">{weightGoal} kg</span>
          </p>
        </div>
        <div>
          <p>
            You already lost:{" "}
            <span
              className={`font-semibold ${
                weightLost < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {weightLost} kg
            </span>
          </p>
        </div>
        <div>
          <p>
            Time left to reach your goal (based on data you gave):{" "}
            <span className="font-semibold">{timeLeft}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeightCard;
