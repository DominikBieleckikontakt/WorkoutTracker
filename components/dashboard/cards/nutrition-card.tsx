import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";

const NutritionCard = () => {
  const [carbs, setCarbs] = useState(133);
  const [carbsGoal, setCarbsGoal] = useState(150);

  const [proteins, setProteins] = useState(50);
  const [proteinsGoal, setProteinsGoal] = useState(100);

  const [fat, setFat] = useState(10);
  const [fatGoal, setFatGoal] = useState(50);

  return (
    <div className="mx-5">
      <h4 className="text-xl font-semibold mb-2">Nutrition values</h4>
      <div className="space-y-3">
        <NutritionProgress
          nutrition={carbs}
          nutritionGoal={carbsGoal}
          nutritionName="Carbs"
        />
        <NutritionProgress
          nutrition={fat}
          nutritionGoal={fatGoal}
          nutritionName="Fat"
        />
        <NutritionProgress
          nutrition={proteins}
          nutritionGoal={proteinsGoal}
          nutritionName="Proteins"
        />
      </div>
    </div>
  );
};

export const NutritionProgress = ({
  nutrition,
  nutritionGoal,
  nutritionName,
}: {
  nutrition: number;
  nutritionGoal: number;
  nutritionName: string;
}) => {
  const toPercent = (value: number, total: number) => (value * 100) / total;

  return (
    <div className="space-y-1 relative">
      <p className="text-lg">{nutritionName}:</p>
      <Progress
        value={
          toPercent(nutrition, nutritionGoal) >= 100
            ? 100
            : toPercent(nutrition, nutritionGoal)
        }
        className="h-5"
      />
      <div className="font-semibold text-foreground absolute top-7 left-[40%] text-sm">
        {nutrition} / {nutritionGoal}
      </div>
    </div>
  );
};

export default NutritionCard;
