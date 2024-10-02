import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[1100px] mx-5 md:mx-auto">
        <h1 className="font-thin text-5xl text-center mt-48 md:text-6xl lg:text-8xl ">
          Your Health, <span className="font-semibold">Simplified</span>
        </h1>
        <p className="text-center mt-5 text-sm md:text-md lg:text-lg text-gray-500">
          Track your workouts, meals and progress with our intuitive dashboard.
        </p>
        <p className="text-center mt-1 text-sm md:text-md lg:text-lg text-gray-500">
          Stay motivated and reach your fitness goals faster.
        </p>
        <div className="flex gap-5 justify-center mt-8">
          <Button className="rounded-xl" size="lg">
            Get started
          </Button>
          <Button variant="outline" className="rounded-xl" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
