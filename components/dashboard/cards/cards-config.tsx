import StepsCard from "./steps-card";
import TodaysStats from "./todays-stats";
import NutritionCard from "./nutrition-card";
import WeightCard from "./weight-card";
import HeartRate from "./heart-rate";
import WaterCard from "./water-card";
import ProposedWorkouts from "./proposed-workouts";

export const cardComponents = {
  steps: <StepsCard />,
  stats: <TodaysStats />,
  nutrition: <NutritionCard />,
  weight: <WeightCard />,
  heartRate: <HeartRate />,
  water: <WaterCard />,
  // workouts: <ProposedWorkouts />,
};

export type CardId = keyof typeof cardComponents;

export const initialCardOrder: CardId[] = [
  "steps",
  "stats",
  "nutrition",
  "weight",
  "heartRate",
  "water",
  // "workouts",
];
