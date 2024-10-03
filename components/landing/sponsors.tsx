"use client";
import Image from "next/image";
import React from "react";

const sponsors: string[] = [
  "/icons/brands/uber.png",
  "/icons/brands/spotify.png",
  "/icons/brands/microsoft.png",
  "/icons/brands/dell.png",
  "/icons/brands/asus.png",
];

const Sponsors = () => {
  return (
    <div className="mt-16 w-full border-y-2 border-gray-200 mb-16 overflow-hidden">
      <div className="flex w-full space-x-32 items-center animate-scroll">
        {sponsors.concat(sponsors).map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor}
            alt={`Sponsor ${index + 1}`}
            width={120}
            height={120}
            className={`${
              (sponsor.includes("spotify") ||
                sponsor.includes("microsoft") ||
                sponsor.includes("asus") ||
                sponsor.includes("uber")) &&
              "w-32 h-28"
            } h-16 mx-4 inline-block object-contain opacity-30`}
          />
        ))}
        {sponsors.concat(sponsors).map((sponsor, index) => (
          <Image
            key={`${index}-duplicate`}
            src={sponsor}
            alt={`Sponsor ${index + 1}`}
            width={120}
            height={120}
            className={`${
              (sponsor.includes("spotify") ||
                sponsor.includes("microsoft") ||
                sponsor.includes("asus") ||
                sponsor.includes("uber")) &&
              "w-32 h-28"
            } h-16 mx-4 inline-block object-contain opacity-30`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
