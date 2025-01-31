import React from "react";
import MyProgress from "@/components/ui/my-progress";

const NutritionCard = ({
  carbs = 88,
  carbsGoal = 150,
  proteins = 60,
  proteinsGoal = 100,
  fat = 25,
  fatGoal = 50,
  caloriesEaten = 2000,
  caloriesEatenGoal = 2500,
}) => {
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
            <NutritionProgress
              nutrition={fat}
              nutritionGoal={fatGoal}
              nutritionName="Fat"
              progressBg="bg-yellow-600"
            />
          </div>
          <NutritionProgress
            nutrition={proteins}
            nutritionGoal={proteinsGoal}
            nutritionName="Proteins"
            progressBg="bg-blue-600"
          />
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
  return (
    <div className="relative space-y-1">
      <p>{nutritionName}:</p>
      <div className="relative">
        <MyProgress value={nutrition} max={nutritionGoal} color={progressBg} />
      </div>
    </div>
  );
};

export default NutritionCard;
