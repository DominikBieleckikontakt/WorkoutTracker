"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  useDraggable,
  useDroppable,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  arrayMove,
} from "@dnd-kit/sortable";

import DraggableCard from "../draggable-card";
import StepsCard from "./steps-card";

interface Card {
  id: string;
  content: string | React.ReactNode;
}

const Cards = () => {
  const [columns, setColumns] = useState<Record<string, Card[]>>({
    column1: [{ id: "1", content: <StepsCard /> }],
    column2: [{ id: "2", content: "Card 2" }],
    column3: [{ id: "3", content: "Card 3" }],
    column4: [{ id: "4", content: "Card 4" }],
    column5: [{ id: "5", content: "Card 5" }],
    column6: [{ id: "6", content: "Card 6" }],
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

    // Here will be save to db
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
                  <DraggableCard key={card.id} id={`${columnId}-${card.id}`}>
                    {card.content}
                  </DraggableCard>
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

  return <div ref={setNodeRef}>{children}</div>;
};

export default Cards;
