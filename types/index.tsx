import { z } from "zod";

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
