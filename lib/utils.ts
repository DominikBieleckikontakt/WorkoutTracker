import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const defineActivityRate = (activityLevel: string) => {
  const activityRates: Record<string, number> = {
    "Sedentary (No trainings)": 1.2,
    "Light (1-3 trainings per week)": 1.375,
    "Moderate (3-5 trainings per week)": 1.55,
    "Active (5 - 6 trainings per week)": 1.725,
    "Very Active (Athlete)": 1.9,
  };

  return activityRates[activityLevel] || 1.2; // Domyślnie 1.2, jeśli wartość nie pasuje
};

const calculateMacros = (calories: number, weight: number, goal: string) => {
  let proteinGrams, fatPercentage;

  switch (goal) {
    case "loose weight":
      proteinGrams = weight * 2.2; // 2.2g/kg
      fatPercentage = 0.2; // 20%
      break;
    case "gain weight":
      proteinGrams = weight * 1.8; // 1.8g/kg
      fatPercentage = 0.25; // 25%
      break;
    case "stay the same":
      proteinGrams = weight * 2.0; // 2.0g/kg
      fatPercentage = 0.3; // 30%
      break;
    default:
      throw new Error("Invalid goal");
  }

  const proteinCalories = proteinGrams * 4;
  const fatCalories = calories * fatPercentage;
  const fatGrams = fatCalories / 9;
  const carbsCalories = calories - (proteinCalories + fatCalories);
  const carbsGrams = carbsCalories / 4;

  return {
    protein: { grams: proteinGrams, calories: proteinCalories },
    fat: { grams: fatGrams, calories: fatCalories },
    carbs: { grams: carbsGrams, calories: carbsCalories },
  };
};

export const calculateUserData = (
  age: number,
  height: number,
  weight: number,
  goal: string,
  gender: string,
  activity: string
) => {
  const activityRate = defineActivityRate(activity);

  const ppm =
    gender === "Female"
      ? 10 * weight + 6.25 * height - 5 * age - 161
      : 10 * weight + 6.25 * height - 5 * age + 5;

  const cpm = ppm * activityRate;

  const caloriesGoal =
    goal === "Loose weight"
      ? cpm - 500
      : goal === "Gain weight"
      ? cpm + 500
      : cpm;
  const caloriesToBurn =
    goal === "Loose weight"
      ? cpm + 500
      : goal === "Gain weight"
      ? cpm - 500
      : cpm;
  const calculatedMacros = calculateMacros(caloriesGoal, weight, goal);

  return {
    burnCaloriesGoal: caloriesToBurn,
    caloriesGoal,
    proteinsGoal: calculatedMacros.protein.grams,
    fatGoal: calculatedMacros.fat.grams,
    carbsGoal: calculatedMacros.carbs.grams,
  };
};
