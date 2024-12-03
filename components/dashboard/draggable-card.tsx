"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";

import { Edit, Plus } from "lucide-react";

const DraggableCard = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
    });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    transition: "transform 200ms ease",
    opacity: isDragging ? 0 : 1,
  };

  return (
    <div
      className={`${
        className && className
      } z-10 p-5 bg-sidebar border-sidebar-border text-foreground rounded-lg relative shadow w-full h-full`}
      ref={setNodeRef}
      style={style}
    >
      {children}
      <div className="absolute flex top-1 right-1 gap-2 items-center">
        <Edit className="size-4 opacity-60 cursor-pointer hover:opacity-100 duration-300" />
        <Plus
          className="size-5 opacity-60 cursor-grab hover:opacity-100 duration-300"
          {...attributes}
          {...listeners}
          aria-label="Drag"
        />
      </div>
    </div>
  );
};

export default DraggableCard;
