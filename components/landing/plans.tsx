import React from "react";
import Container from "./container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

const PlanCard = ({
  className,
  isPro,
  level,
  price,
  description,
}: {
  className?: string;
  isPro?: boolean;
  level: string;
  price: number;
  description: string;
}) => {
  return (
    <div
      className={`p-5 ${className} ${
        isPro && "bg-primary text-white"
      } rounded-lg`}
    >
      <h2 className="font-lg">{level}</h2>
      <p className={`text-sm text-gray-500 ${isPro && "text-white"} mt-2`}>
        <span className={`text-2xl ${isPro ? "text-white" : "text-black"}`}>
          ${price}
        </span>
        /month
      </p>
      <p className={`text-gray-500 ${isPro && "text-white"} my-3 mb-5`}>
        {description}
      </p>
      <Button
        className={`bg-gray-300 hover:bg-gray-300/80 duration-300 w-full text-black ${
          isPro && "bg-white text-primary hover:bg-white/90"
        }`}
      >
        Get Started
      </Button>
    </div>
  );
};

const Plans = () => {
  return (
    <Container className="my-24 space-y-6">
      <div className="text-center space-y-6">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          <span className="font-semibold">Plans</span> That Fit Your Fitness
          Journey
        </h3>
        <p className="text-gray-500 lg:mx-24 xl:mx-64">
          Choose a plan that suits your goals. Whether you're just starting or
          aiming for advanced results, we offer flexible options to support your
          fitness journey.
        </p>
      </div>
      <div className="flex justify-center">
        <Tabs
          defaultValue="monthly"
          className="w-full flex flex-col items-center space-y-16"
        >
          <TabsList className="max-w-40">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annual">Annual</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className="w-full">
            <div className="grid lg:grid-cols-3 gap-10">
              <PlanCard level="Basic" price={29} description="some desc" />
              <PlanCard
                level="Basic"
                price={29}
                description="some desc"
                isPro={true}
              />
              <PlanCard level="Basic" price={29} description="some desc" />
            </div>
          </TabsContent>
          <TabsContent value="annual">sth</TabsContent>
        </Tabs>
      </div>
    </Container>
  );
};

export default Plans;
