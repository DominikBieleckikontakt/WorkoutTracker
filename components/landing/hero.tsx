import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mb-48">
      <div className="relative">
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
          className="absolute top-64 left-24 opacity-50 2xl:opacity-100 2xl:top-64 2xl:left-80 bg-white shadow-lg rounded-full"
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
          className="absolute top-72 right-16 opacity-50 2xl:opacity-100 2xl:top-3 2xl:right-36 bg-green-100 rounded-full p-3"
        />
      </div>
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
