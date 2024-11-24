"use client";
import React, { useState } from "react";
import { Footprints } from "lucide-react";

const StepsCard = () => {
  const [currentSteps, setCurrentSteps] = useState(3500);
  const [goalSteps, setGoalSteps] = useState(10000);

  return (
    <div className="flex justify-center gap-5">
      <div className="flex flex-col justify-between">
        <div className="space-y-1">
          <h4 className="text-xl font-semibold">Today's steps</h4>
          <p>
            Current:{" "}
            <span className="font-semibold text-primary">{currentSteps}</span>
          </p>
          <p>
            Goal:{" "}
            <span className="font-semibold text-primary">{goalSteps}</span>
          </p>
        </div>
        <div>
          <p>
            Remains:{" "}
            <span className="font-semibold text-primary">
              {currentSteps >= goalSteps ? 0 : goalSteps - currentSteps}
            </span>
          </p>
        </div>
      </div>
      <div className="relative size-40">
        <svg
          className="size-full -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-gray-200 dark:text-neutral-700"
            stroke-width="2"
          ></circle>
          {/* Progress Circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-primary"
            stroke-width="2"
            stroke-dasharray="100"
            stroke-dashoffset={`${
              currentSteps < goalSteps
                ? `calc(100 - ${(currentSteps / goalSteps) * 100})`
                : 0
            } `}
            stroke-linecap="round"
          ></circle>
        </svg>

        {/* Percentage Text */}
        <div className="absolute grid top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
          <Footprints className="mx-auto mb-2 size-12 text-primary" />
          <span className="text-center text-2xl font-bold text-primary">
            {Math.floor((currentSteps / goalSteps) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepsCard;
