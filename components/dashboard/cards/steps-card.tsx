"use client";
import React, { useState, useEffect } from "react";
import { Footprints } from "lucide-react";

const StepsCard = () => {
  const [currentSteps, setCurrentSteps] = useState(3500);
  const [goalSteps, setGoalSteps] = useState(10000);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetProgress = Math.min((currentSteps / goalSteps) * 100, 100);
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress >= targetProgress) {
        currentProgress = targetProgress;
        clearInterval(interval);
      }
      setProgress(currentProgress);
    }, 25);

    return () => clearInterval(interval);
  }, [currentSteps, goalSteps]);

  return (
    <div className="h-full">
      <h4 className="text-xl font-semibold mb-3">Today's steps</h4>
      <div className="flex justify-between h-[calc(100%-2.4rem)]">
        <div className="flex justify-between flex-col">
          <div>
            <p>
              Current:{" "}
              <span className="font-semibold text-primary">{currentSteps}</span>
            </p>
            <p>
              Goal:{" "}
              <span className="font-semibold text-primary">{goalSteps}</span>
            </p>
          </div>
          <p>
            Remains:{" "}
            <span className="font-semibold text-primary">
              {currentSteps >= goalSteps ? 0 : goalSteps - currentSteps}
            </span>
          </p>
        </div>
        <div className="relative size-44 mb-3 h-full">
          <svg
            className="size-full -rotate-90"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "100%", width: "100%" }}
          >
            {/* Background Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-gray-200 dark:text-neutral-700"
              strokeWidth="2"
            ></circle>
            {/* Progress Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-primary"
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={`${100 - progress}`}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.1s linear",
              }}
            ></circle>
          </svg>

          {/* Percentage Text */}
          <div className="absolute grid top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
            <Footprints className="mx-auto mb-2 size-12 text-primary" />
            <span className="text-center text-2xl font-bold text-primary">
              {Math.floor(progress)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsCard;
