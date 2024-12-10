"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { toPercent } from "@/constants";

const NutritionCard = () => {
  const [carbs, setCarbs] = useState(88);
  const [carbsGoal, setCarbsGoal] = useState(150);

  const [proteins, setProteins] = useState(60);
  const [proteinsGoal, setProteinsGoal] = useState(100);

  const [fat, setFat] = useState(20);
  const [fatGoal, setFatGoal] = useState(50);

  const [caloriesEaten, setCaloriesEaten] = useState(2000);
  const [caloriesEatenGoal, setCaloriesEatenGoal] = useState(2500);

  return (
    <div className="">
      <h4 className="text-xl font-semibold mb-3">Nutrition values</h4>
      <div className="space-y-3">
        <div className="space-y-3">
          <div className="grid lg:grid-cols-2 gap-5">
            <NutritionProgress
              nutrition={carbs}
              nutritionGoal={carbsGoal}
              nutritionName="Carbs"
              progressBg="bg-purple-500"
            />
            <div>
              <NutritionProgress
                nutrition={fat}
                nutritionGoal={fatGoal}
                nutritionName="Fat"
                progressBg="bg-yellow-600"
              />
            </div>
          </div>
          <div>
            <NutritionProgress
              nutrition={proteins}
              nutritionGoal={proteinsGoal}
              nutritionName="Proteins"
              progressBg="bg-blue-600"
            />
          </div>
        </div>
        <div className="pt-5">
          <NutritionProgress
            nutrition={caloriesEaten}
            nutritionGoal={caloriesEatenGoal}
            nutritionName="Calories Eaten"
          />
        </div>
      </div>
    </div>
  );
};

export const NutritionProgress = ({
  nutrition,
  nutritionGoal,
  nutritionName,
  progressBg,
}: {
  nutrition: number;
  nutritionGoal: number;
  nutritionName: string;
  progressBg?: string;
}) => {
  const [nutritionProgress, setNutritionProgress] = useState(0);

  useEffect(() => {
    const targetProgress = Math.min((nutrition / nutritionGoal) * 100, 100);
    const animationDuration = 1000;
    const intervalDelay = 40;
    const totalSteps = (animationDuration / intervalDelay) * 2;
    const step = targetProgress / totalSteps;

    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += step;
      if (currentProgress >= targetProgress) {
        currentProgress = targetProgress;
        clearInterval(interval);
      }
      setNutritionProgress(currentProgress);
    }, intervalDelay);

    return () => clearInterval(interval);
  }, [nutrition, nutritionGoal]);

  return (
    <div className="relative space-y-1">
      <p>{nutritionName}:</p>
      <div className="relative">
        <Progress
          value={nutritionProgress}
          className="h-5 bg-gray-200 dark:bg-neutral-700 transition-all duration-300 ease-in-out"
          progressBg={progressBg && progressBg}
        />
        <div className="font-semibold text-foreground absolute top-0 left-1/2 -translate-x-1/2 text-sm">
          {Math.floor((nutritionProgress / 100) * nutritionGoal)} /{" "}
          {nutritionGoal}
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;
