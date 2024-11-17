import React from "react";
import Container from "./container";
import { Button } from "../ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <Container className="bg-background shadow-sm rounded-lg p-5 lg:p-10 lg:flex justify-between items-center gap-10">
      <div className="space-y-8 flex-1">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          Achieve Your <span className="font-semibold">Fitness Goals</span> with
          Ease
        </h3>
        <p className="text-light">
          Join thousands of fitness enthustiasts on our platform and transform
          your health. Available only on website!
        </p>
        <Button
          asChild
          className="rounded-lg py-6 dark:text-white  z-10 relative after:content-[''] after:absolute after:w-full after:h-full after:-z-10 after:rounded-lg after:bg-primary after:blur-sm transition duration-300 hover:after:blur-[6px] after:transition after:duration-300"
        >
          <Link href="/authentication/login">Start Your Journey</Link>
        </Button>
      </div>
      <div className="w-full my-10 lg:my-0 lg:w-1/2 text-center">
        <h2 className="text-7xl lg:text-8xl text-black/15 font-bold dark:text-white/15">
          PulseFit<span className="text-primary/20">.</span>
        </h2>
      </div>
    </Container>
  );
};

export default Banner;
