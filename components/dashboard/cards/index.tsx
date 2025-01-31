"use client";
import { useState, useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import StepsCard from "./steps-card";
import TodaysStats from "./todays-stats";
import NutritionCard from "./nutrition-card";
import WeightCard from "./weight-card";
import HeartRate from "./heart-rate";
import WaterCard from "./water-card";
import ProposedWorkouts from "./proposed-workouts";
import DraggableCard from "../draggable-card";
import { Card } from "@/types";

const initialCards: Card[] = [
  { id: "1", content: <StepsCard /> },
  { id: "2", content: <TodaysStats /> },
  { id: "3", content: <NutritionCard /> },
  { id: "4", content: <WeightCard /> },
  { id: "5", content: <HeartRate /> },
  { id: "6", content: <WaterCard /> },
  { id: "7", content: <ProposedWorkouts /> },
];

export default function DraggableCards() {
  const [cards, setCards] = useState<Card[]>(initialCards);
  const containerRef = useRef<HTMLDivElement>(null);
  const swapyInstance = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      swapyInstance.current = createSwapy(containerRef.current);

      swapyInstance.current.onSwap(
        ({ from, to }: { from: string; to: string }) => {
          setCards((prevCards) => {
            const fromIndex = prevCards.findIndex((c) => c.id === from);
            const toIndex = prevCards.findIndex((c) => c.id === to);

            if (fromIndex === -1 || toIndex === -1) return prevCards;

            const updatedCards = [...prevCards];
            const [movedItem] = updatedCards.splice(fromIndex, 1);
            updatedCards.splice(toIndex, 0, movedItem);

            return updatedCards;
          });
        }
      );
    }

    return () => {
      swapyInstance.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid gap-5 mx-5 sm:grid-cols-2 sm:mx-8 lg:grid-cols-3 2xl:grid-cols-4 2xl:mx-24"
    >
      {cards.map((card) => (
        <div key={card.id} data-swapy-slot={card.id} className="relative">
          <div data-swapy-item={card.id} className="w-full h-full relative">
            <DraggableCard id={card.id} content={card.content} />
          </div>
        </div>
      ))}
    </div>
  );
}
