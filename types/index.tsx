import { z } from "zod";

export type GoogleFitDataArrayType = {
  dataType: string;
  dataLabel: string;
  value: number[];
  startTime: string;
  endTime: string;
};

export type TodayGoogleFitData = {
  id: string;
  userId: string;
  steps: number | null;
  stepsGoal: number | null;
  sleep: number | null;
  burnedCalories: number | null;
  burnCaloriesGoal: number | null;
  timeInSport: number | null;
  lastTraining: string | null;
  carbs: number | null;
  carbsGoal: number | null;
  fat: number | null;
  fatGoal: number | null;
  proteins: number | null;
  proteinsGoal: number | null;
  calories: number | null;
  caloriesGoal: number | null;
  drinkedWater: number | null;
  heartRate: number[] | null;
  date: string | null;
};

export type TestimonialsArrayType = {
  content: string;
  userName: string;
  userTag: string;
  userAvatar: string;
  socialSrc: string;
}[];

export type QuestionsType = {
  question: string;
  options: string[] | null[];
  isInput: boolean;
  inputType: string;
  schema: z.ZodString | z.ZodNumber;
};

export type StateType = {
  answers: (string & number)[] | [];
};

export type UserSessionType = {
  email: string;
  id: string;
  image: null | string;
  isNewuser: boolean;
  name: string;
  subscriptionLevel: string;
};

export type UserType = {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  password: string | null;
  image: string | null;
  subscriptionLevel: string;
  isNewUser: boolean;
};

export type Card = {
  id: string;
  content: JSX.Element;
};

export type DraggableCardProps = {
  id: string;
  content: JSX.Element;
};
