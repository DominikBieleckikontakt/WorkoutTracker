"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  useDroppable,
  DragOverlay,
} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

import DraggableCard from "../draggable-card";
import StepsCard from "./steps-card";
import NutritionCard from "./nutrition-card";

interface Card {
  id: string;
  content: string | React.ReactNode;
}

const Cards = () => {
  const [columns, setColumns] = useState<Record<string, Card[]>>({
    column1: [{ id: "1", content: <StepsCard /> }],
    column2: [{ id: "2", content: <NutritionCard /> }],
    column3: [{ id: "3", content: "Card 3" }], // Calories eaten and burned
    column4: [{ id: "4", content: "Card 4" }], // Current weight, weight goal, time to achive
    column5: [{ id: "5", content: "Card 5" }], // Last activity
    column6: [{ id: "6", content: "Card 6" }], // Last sleep
    column7: [{ id: "7", content: "Card 7" }], // Proposed workouts (from youtube)
    column8: [{ id: "8", content: "Card 8" }], // Current workouts (callendar?)
  });
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  const handleDragStart = (event: any) => {
    const { active } = event;
    const [columnId, cardId] = active.id.split("-");
    const card = columns[columnId].find((c) => c.id === cardId);
    if (card) setActiveCard(card);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    const [fromColumnId, cardId] = active.id.split("-");
    const toColumnId = over.id;

    if (fromColumnId === toColumnId) return; // No movement

    const fromColumn = columns[fromColumnId];
    const toColumn = columns[toColumnId];

    const card = fromColumn.find((c) => c.id === cardId);
    if (!card) return;

    const updatedFromColumn = fromColumn.filter((c) => c.id !== cardId);

    const swappedCard = toColumn.shift();

    const updatedToColumn = [card, ...toColumn];

    if (swappedCard) {
      updatedFromColumn.unshift(swappedCard);
    }

    setColumns((prev) => ({
      ...prev,
      [fromColumnId]: updatedFromColumn,
      [toColumnId]: updatedToColumn,
    }));

    setActiveCard(null);

    // TODO: Save state of layout to database
  };

  return (
    <div className="w-full h-screen">
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid gap-5 mx-5 sm:grid-cols-2 sm:mx-8 lg:grid-cols-3 2xl:grid-cols-4 2xl:mx-24">
          {Object.keys(columns).map((columnId) => (
            <DroppableColumn key={columnId} id={columnId}>
              <SortableContext
                id={columnId}
                items={columns[columnId].map(
                  (card) => `${columnId}-${card.id}`
                )}
                strategy={rectSortingStrategy}
              >
                {columns[columnId].map((card) => (
                  <div className="relative w-full h-full" key={card.id}>
                    <DraggableCard id={`${columnId}-${card.id}`}>
                      {card.content}
                    </DraggableCard>
                    <div className="w-full h-full absolute top-0 left-0 border-2 border-dashed border-sidebar-border rounded-lg" />
                  </div>
                ))}
              </SortableContext>
            </DroppableColumn>
          ))}
        </div>
        <DragOverlay>
          {activeCard ? (
            <div className="p-5 bg-sidebar/90 border-sidebar-border rounded-lg h-full w-full">
              {activeCard.content}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

const DroppableColumn = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`${id === "column3" ? "md:col-span-2" : "col-span-1"}`}
    >
      {children}
    </div>
  );
};

export default Cards;
