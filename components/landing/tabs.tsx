import React from "react";
import Image from "next/image";

import Container from "./container";

const Tabs = () => {
  return (
    <Container className="flex justify-center items-center flex-col lg:flex-row lg:justify-between gap-10 my-4">
      <div className="space-y-8">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          <span className="font-semibold">Seamless</span> Integration
        </h3>
        <p className="text-gray-500">
          Manage your workouts, track your progress, and share insights with
          trainers and friends - all in one place. Enjoy real-time updates and
          detailed analytics for an optimized fitness journey.
        </p>
        <div className="space-y-2">
          <div className="text-primary font-semibold flex items-center gap-1">
            <div className="w-[3px] h-3 bg-primary rounded-full" /> Widgets
            Customization
          </div>
          <div className="text-primary font-semibold flex items-center gap-1">
            <div className="w-[3px] h-3 bg-primary rounded-full" /> Real-Time
            Data Sync
          </div>
          <div className="text-primary font-semibold flex items-center gap-1">
            <div className="w-[3px] h-3 bg-primary rounded-full" />{" "}
            Collaborative Schedulling
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-full h-full flex justify-center items-center min-h-96 rounded-lg">
        <Image
          src="/icons/image_placeholder.png"
          alt="placeholder"
          width={100}
          height={100}
          className="opacity-30"
        />
      </div>
    </Container>
  );
};

export default Tabs;
