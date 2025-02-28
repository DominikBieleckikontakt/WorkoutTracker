import { DraggableCardProps } from "@/types";
import { Plus } from "lucide-react";
import Dialogs from "./cards/dialogs";

export default function DraggableCard({ id, content }: DraggableCardProps) {
  return (
    <div className="p-5 bg-sidebar border-sidebar-border text-foreground rounded-lg relative shadow w-full h-full">
      {content}
      <div className="absolute flex top-1 right-1 gap-2 items-center">
        <Dialogs cardId={id} />
        <Plus
          className="size-5 opacity-60 cursor-grab hover:opacity-100 duration-300"
          aria-label="Drag"
          data-swapy-handle
        />
      </div>
    </div>
  );
}
