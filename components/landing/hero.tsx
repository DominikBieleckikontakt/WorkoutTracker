import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mb-48 mt-64">
      <div className="relative mt-24">
        <Image
          src="/icons/bicycle_icon.png"
          alt="bicycle"
          width={60}
          height={60}
          className="absolute -top-16 left-12 opacity-50 2xl:opacity-100 2xl:-top-8 2xl:left-36 bg-red-100 rounded-full"
        />
      </div>
      <div className="relative">
        <Image
          src="/icons/boot_icon.png"
          alt="bicycle"
          width={70}
          height={70}
          className="absolute top-80 left-24 opacity-50 2xl:opacity-100 md:top-64 2xl:left-80 bg-white shadow-lg rounded-full"
        />
      </div>
      <div className="relative">
        <Image
          src="/icons/racket_icon.png"
          alt="bicycle"
          width={50}
          height={50}
          className="absolute right-16 -z-10 -top-16 opacity-50 2xl:opacity-100 2xl:top-56 2xl:right-80 bg-white shadow-lg rounded-full p-1"
        />
      </div>
      <div className="relative">
        <Image
          src="/icons/salad_icon.png"
          alt="bicycle"
          width={70}
          height={70}
          className="absolute top-72 right-16 opacity-50 2xl:opacity-100 2xl:top-3 2xl:right-36 bg-green-100 rounded-full p-3 -z-10"
        />
      </div>
      <div className="max-w-[1100px] mx-5 lg:mx-auto">
        <h1 className="font-thin text-5xl text-center mt-48 md:text-6xl lg:text-8xl ">
          Unlock Your Fitness <span className="font-semibold">Potential</span>
        </h1>
        <p className="text-center mt-5 text-sm md:text-md lg:text-lg text-gray-500 lg:max-w-[50rem] lg:mx-auto">
          Track your workouts, achieve your goals, and transform your lifestyle
          with personalized insights and seamless integration.
        </p>

        <div className="flex gap-5 justify-center mt-8">
          <Button
            className="rounded-xl hover:bg-primary/70 duration-300 z-10 relative after:content-[''] after:absolute after:w-full after:h-full after:-z-10 after:rounded-lg after:bg-primary after:blur-sm"
            size="lg"
          >
            Get started
          </Button>
          <Button
            variant="outline"
            className="rounded-xl hover:bg-black/5 duration-300"
            size="lg"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
