"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useSession } from "next-auth/react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { QuestionsType } from "@/types";
import { addUserData } from "@/actions/addUserData";
import useUserEmailStore from "@/lib/store/useUserEmailStore";

const questions: QuestionsType[] = [
  {
    question: "What is your gender?",
    options: ["Male", "Female", "Other"],
    isInput: false,
    inputType: "",
    schema: z.string().min(1, "Please select your gender."),
  },
  {
    question: "How old are you?",
    options: [],
    isInput: true,
    inputType: "number",
    schema: z
      .number()
      .min(3, "Age must be at least 1")
      .max(120, "Please enter a valid age.")
      .nonnegative(),
  },
  {
    question: "What is your height? [cm]",
    options: [],
    isInput: true,
    inputType: "number",
    schema: z
      .number()
      .min(30, "Height must be at least 30 cm.")
      .max(300, "Please enter a realistic height."),
  },
  {
    question: "What is your weight? [kg]",
    options: [],
    isInput: true,
    inputType: "number",
    schema: z
      .number()
      .min(30, "Weight must be at least 30kg.")
      .max(500, "Please enter a realistic weight."),
  },
  {
    question: "What is your goal?",
    options: ["Loose weight", "Gain weight", "Stay the same"],
    isInput: false,
    inputType: "",
    schema: z.string().min(1, "Please select your goal."),
  },
];

const StartingQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  const userEmail = useUserEmailStore((state: any) => state.email);

  const { data: session }: { data: any } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/authentication/login");
      return;
    }
  }, []);

  const handleSubmit = async () => {
    const currentSchema = questions[currentQuestion].schema;

    try {
      if (questions[currentQuestion].isInput) {
        currentSchema.parse(Number(answer));
      } else {
        currentSchema.parse(answer);
      }

      setAnswers([...answers, answer]);

      setError("");
      setAnswer("");

      currentQuestion !== questions.length - 1
        ? setCurrentQuestion((prevCurrent) => prevCurrent + 1)
        : finishTest();
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  const finishTest = async () => {
    try {
      const finalAnswers = [...answers, answer];
      const status = await addUserData(userEmail, finalAnswers);
      if (status.status === "success") {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-5 rounded-md bg-white dark:bg-black/30 shadow-md space-y-8 min-w-72 sm:min-w-96">
        <div className="space-y-3">
          <p className="font-semibold">
            {questions[currentQuestion].question || "Here is an question?"}
          </p>
          <div>
            {questions[currentQuestion].isInput && (
              <Input
                type={questions[currentQuestion].inputType}
                placeholder="Type here"
                required
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            )}
            {questions[currentQuestion].options.length > 0 && (
              <Select required onValueChange={(value) => setAnswer(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {questions[currentQuestion].options.map((option) => (
                    <SelectItem key={option} value={option!.toLowerCase()}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
          {error && <p className="text-red-500 font-semibold">{error}</p>}
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <div
        style={{
          width: `${(currentQuestion / questions.length) * 100}%`,
        }}
        className={`h-1 bg-primary absolute bottom-0 left-0 transition-all duration-500 ease-linear`}
      />
    </>
  );
};

export default StartingQuestions;
