import React from "react";
import Container from "./container";
import Image from "next/image";
import { Button } from "../ui/button";

const ProductivityCard = ({
  className,
  imageSrc,
  title,
  subtitle,
}: {
  className?: string;
  imageSrc?: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div
      className={`bg-white dark:bg-black/60 shadow-sm hover:shadow-lg duration-300 rounded-lg ${className}`}
    >
      <div className="bg-gray-100 dark:invert rounded-t-lg flex justify-center items-center h-64">
        <Image
          src={imageSrc || "/icons/image_placeholder.png"}
          alt="placeholder"
          width={100}
          height={100}
          className="opacity-30"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-text-light font-light mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

const Productivity = () => {
  return (
    <Container className="space-y-16 my-24" id="features">
      <div className="text-center space-y-6">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          Tools to <span className="font-semibold">Elevate</span> Your
          Productivity
        </h3>
        <p className="text-text-light lg:mx-24 xl:mx-64">
          Explore powerful tools designed to streamline your creative progress.
          From seamless integrations to effortless content management, these
          features are built to enhance your productivity and creativity
        </p>
      </div>
      <div className="space-y-10">
        <div className="flex gap-10 flex-col lg:flex-row">
          <ProductivityCard
            title="Customizable Workout Plans"
            subtitle="Tailor your workout routines to fit your unique goals and preferences, with easy-to-edit plans created by top trainers."
          />
          <ProductivityCard
            title="Progress Tracking"
            subtitle="Monitor your fitness progress with real-time updates on calories burned, steps taken, and muscle mass gained."
          />
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <ProductivityCard
            title="Meal Prep Integration"
            subtitle="Plan and track your meals alongside your workouts for a holistic approach to health."
          />
          <ProductivityCard
            title="Body Analysis Insights"
            subtitle="Track your weight, BMI, calories burned to improve your fitness results."
          />
          <ProductivityCard
            title="Smart Workout Scheduler"
            subtitle="Easily plan and organize your workouts and activies with a clear, daily timeline"
          />
        </div>
      </div>
      <div className="text-center">
        <Button
          className="text-white rounded-xl z-10 py-6 relative after:content-[''] after:absolute after:w-full after:h-full after:-z-10 after:rounded-lg after:bg-primary after:blur-sm transition duration-300 hover:after:blur-[6px] after:transition after:duration-300"
          size="lg"
        >
          Explore More
        </Button>
      </div>
    </Container>
  );
};

export default Productivity;
