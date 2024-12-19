"use client";
import Link from "next/link";
import React from "react";

type YoutubeElementType = {
  id: number;
  name: string;
  link: string;
};

const workoutElements: YoutubeElementType[] = [
  {
    id: 1,
    name: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    link: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    name: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    link: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    name: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    link: "dQw4w9WgXcQ",
  },
  {
    id: 4,
    name: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    link: "dQw4w9WgXcQ",
  },
];

const ProposedWorkouts = () => {
  return (
    <div className="space-y-3 max-w-full">
      <h4 className="text-xl font-semibold mb-3">
        Proposed workouts from youtube
      </h4>
      <div className="overflow-x-auto max-sm:flex-wrap flex gap-10 max-sm:justify-center w-full">
        {workoutElements.map((item, index) => (
          <div
            key={index}
            className="shadow-md dark:bg-background rounded-xl space-y-3 mb-5 relative group"
          >
            <iframe
              src={`https://www.youtube.com/embed/${item.link}`}
              className="rounded-t-xl max-sm:w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              width={200}
              height={150}
            ></iframe>
            <h5 className="text-sm font-light px-2 py-2 pb-5">{item.name}</h5>
            <Link
              href={`https://www.youtube.com/watch?v=${item.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition duration-200"
            ></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProposedWorkouts;
