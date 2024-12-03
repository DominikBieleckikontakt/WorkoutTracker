"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { toPercent } from "@/constants";

const NutritionCard = () => {
  const [carbs, setCarbs] = useState(133);
  const [carbsGoal, setCarbsGoal] = useState(150);
  const [carbsProgress, setCarbsProgress] = useState(0);

  const [proteins, setProteins] = useState(60);
  const [proteinsGoal, setProteinsGoal] = useState(100);
  const [proteinsProgress, setProteinsProgress] = useState(0);

  const [fat, setFat] = useState(10);
  const [fatGoal, setFatGoal] = useState(50);
  const [fatProgress, setFatProgress] = useState(0);

  useEffect(() => {
    const carbsTargetProgress = Math.min((carbs / carbsGoal) * 100, 100);
    let carbsCurrentProgress = 0;

    const proteinsTargetProgress = Math.min(
      (proteins / proteinsGoal) * 100,
      100
    );
    let proteinsCurrentProgress = 0;

    const fatTargetProgress = Math.min((fat / fatGoal) * 100, 100);
    let fatCurrentProgress = 0;

    const carbsInterval = setInterval(() => {
      carbsCurrentProgress += 1;
      if (carbsCurrentProgress >= carbsTargetProgress) {
        carbsCurrentProgress = carbsTargetProgress;
        clearInterval(carbsInterval);
      }
      setCarbsProgress(carbsCurrentProgress);
    }, 50);

    const proteinsInterval = setInterval(() => {
      proteinsCurrentProgress += 1;
      if (proteinsCurrentProgress >= proteinsTargetProgress) {
        proteinsCurrentProgress = proteinsTargetProgress;
        clearInterval(proteinsInterval);
      }
      setProteinsProgress(proteinsCurrentProgress);
    }, 50);

    const fatInterval = setInterval(() => {
      fatCurrentProgress += 1;
      if (fatCurrentProgress >= fatTargetProgress) {
        fatCurrentProgress = fatTargetProgress;
        clearInterval(fatInterval);
      }
      setFatProgress(fatCurrentProgress);
    }, 50);

    return () => {
      clearInterval(carbsInterval);
      clearInterval(proteinsInterval);
      clearInterval(fatInterval);
    };
  }, [carbs, carbsGoal, proteins, proteinsGoal, fat, fatGoal]);

  return (
    <div className="">
      <h4 className="text-xl font-semibold mb-3">Nutrition values</h4>
      <div className="space-y-5">
        <div className="grid lg:grid-cols-2 gap-5">
          <NutritionProgress
            nutrition={carbs}
            nutritionGoal={carbsGoal}
            nutritionName="Carbs"
            nutritionProgress={carbsProgress}
          />
          <div>
            <NutritionProgress
              nutrition={fat}
              nutritionGoal={fatGoal}
              nutritionName="Fat"
              nutritionProgress={fatProgress}
            />
          </div>
        </div>
        <div>
          <NutritionProgress
            nutrition={proteins}
            nutritionGoal={proteinsGoal}
            nutritionName="Proteins"
            nutritionProgress={proteinsProgress}
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
  nutritionProgress,
}: {
  nutrition: number;
  nutritionGoal: number;
  nutritionName: string;
  nutritionProgress: number;
}) => {
  return (
    <div className="relative space-y-1">
      <p>{nutritionName}:</p>
      <div className="relative">
        <Progress
          value={(nutritionProgress * 100) / nutritionGoal}
          className="h-5 bg-gray-200 dark:bg-neutral-700"
        />
        <div className="font-semibold text-foreground absolute top-0 left-1/2 -translate-x-1/2 text-sm">
          {Math.floor(nutritionProgress)} / {nutritionGoal}
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;
