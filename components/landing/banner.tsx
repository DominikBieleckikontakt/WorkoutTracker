import React from "react";
import Container from "./container";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <Container className="bg-white shadow-sm rounded-lg p-5 lg:p-10 lg:flex justify-between items-center gap-10">
      <div className="space-y-8 flex-1">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          Achieve Your <span className="font-semibold">Fitness Goals</span> with
          Ease
        </h3>
        <p className="text-gray-500">
          Join thousands of fitness enthustiasts on our platform and transform
          your health. Available only on website!
        </p>
        <Button className="rounded-lg py-6">Start Your Journey</Button>
      </div>
      <div className="w-full my-10 lg:my-0 lg:w-1/2 text-center">
        <h2 className="text-7xl lg:text-8xl text-black/15 font-bold">
          PulseFit<span className="text-primary/20">.</span>
        </h2>
      </div>
    </Container>
  );
};

export default Banner;
