"use client";
import React, { useState } from "react";
import { Plus, GlassWater } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WaterCard = () => {
  const [glasses, setGlasses] = useState<number[]>([]);
  const [mlPerGlass, setMlPerGlass] = useState(250);

  const [isClicked, setIsClicked] = useState(false);

  const addGlass = () => {
    setGlasses((prev) => [...prev, prev.length + 1]);

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
  };

  const removeGlass = () => {
    setGlasses((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <div className="space-y-3">
      <h4 className="text-xl font-semibold mb-3">Water you drinked:</h4>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={addGlass}
          className={`flex items-center justify-center size-16 rounded-full shadow-lg transition duration-300 bg-sidebar hover:bg-sidebar/60 hover:scale-105 ${
            isClicked ? "hover:scale-75" : ""
          }`}
        >
          <GlassWater className="size-10 text-foreground/30" />
          <Plus className="absolute w-6 h-6 text-black dark:invert" />
        </button>
        {glasses.map((_, index) => (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  key={index}
                  className="size-10 cursor-pointer group relative flex items-center justify-center after:content-['-'] after:text-2xl after:font-semibold after:hidden hover:after:block after:absolute after:text-foreground after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
                  onClick={removeGlass}
                >
                  <GlassWater
                    className={`relative size-10 text-blue-500 cursor-pointer group-hover:text-blue-600/80 duration-300`}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>{mlPerGlass} ml</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default WaterCard;
