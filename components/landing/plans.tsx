import React from "react";
import Container from "./container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { plansLists } from "@/constants";
import Image from "next/image";

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
      } rounded-lg max-lg:max-w-[28rem] max-lg:mx-auto`}
    >
      <h2 className="text-lg">{level}</h2>
      <div>
        <p className={`text-sm text-text-light ${isPro && "text-white"} mt-2`}>
          <span className={`text-2xl ${isPro ? "text-white" : "text-black"}`}>
            ${price}
          </span>
          /month
        </p>

        <p
          className={`text-sm text-[0.7rem] text-text-light ${
            isPro && "text-white/80"
          } mt-0`}
        >
          <span
            className={`text-sm ${
              isPro ? "text-white/90" : "text-black/80"
            } font-semibold`}
          >
            ${+price * 12}
          </span>
          /year
        </p>
      </div>
      <p className={`text-text-light ${isPro && "text-white"} my-3 mb-5`}>
        {description}
      </p>
      <Button
        className={`bg-gray-200 hover:bg-gray-300/70 duration-300 rounded-2xl w-full text-black ${
          isPro && "bg-white text-primary hover:bg-white/90"
        }`}
      >
        Get Started
      </Button>
      <div className="my-5 space-y-2">
        {level === "Basic" &&
          plansLists.basic.map((item, index) => (
            <div key={index} className="flex space-x-1 items-center">
              <Image
                src="/icons/check_icon-green.png"
                alt="check_icon"
                width={16}
                height={16}
              />
              <p>{item}</p>
            </div>
          ))}
        {level === "Pro" &&
          plansLists.pro.map((item, index) => (
            <div key={index} className="flex space-x-1 items-center">
              <Image
                src="/icons/check_icon-white.png"
                alt="check_icon"
                width={16}
                height={16}
              />
              <p>{item}</p>
            </div>
          ))}
        {level === "Enterprise" &&
          plansLists.enterprise.map((item, index) => (
            <div key={index} className="flex space-x-1 items-center">
              <Image
                src="/icons/check_icon-green.png"
                alt="check_icon"
                width={16}
                height={16}
              />
              <p>{item}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

const Plans = () => {
  return (
    <Container className="my-24 space-y-6" id="pricing">
      <div className="text-center space-y-6">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          <span className="font-semibold">Plans</span> That Fit Your Fitness
          Journey
        </h3>
        <p className="text-text-light lg:mx-24 xl:mx-64">
          Find the perfect plan for your fitness journey. Whether you’re just
          starting or aiming for advanced goals, we’ve got you covered.
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
              <PlanCard
                level="Basic"
                price={29}
                description="Ideal for individuals looking to manage personal fitness goals."
              />
              <PlanCard
                level="Pro"
                price={49}
                description="Perfect for fitness enthustiasts who want advanced tracking and customization"
                isPro={true}
              />
              <PlanCard
                level="Enterprise"
                price={69}
                description="Best for gyms and fitness teams looking to streamline and scale operations."
              />
            </div>
          </TabsContent>
          <TabsContent value="annual" className="w-full">
            <div className="grid lg:grid-cols-3 gap-10">
              <PlanCard
                level="Basic"
                price={25}
                description="Ideal for individuals looking to manage personal fitness goals."
              />
              <PlanCard
                level="Pro"
                price={45}
                description="Perfect for fitness enthustiasts who want advanced tracking and customization"
                isPro={true}
              />
              <PlanCard
                level="Enterprise"
                price={65}
                description="Best for gyms and fitness teams looking to streamline and scale operations."
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
};

export default Plans;
