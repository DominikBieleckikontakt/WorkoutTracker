import React from "react";

import Container from "./container";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const FAQ = () => {
  return (
    <Container className="flex justify-center max-lg:items-center flex-col lg:flex-row lg:justify-between gap-10 my-24">
      <div className="space-y-8">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          Frequently <span className="font-semibold">Asked</span> Questions
        </h3>
        <p className="text-text-light">
          Got questions? We’ve got answers! Here’s everything you need to know
          before getting started.
        </p>
        <div>
          <Button className="text-white py-5 rounded-xl">Contact Us</Button>
        </div>
      </div>
      <div className="max-lg:max-w-[28rem] lg:min-w-[40rem]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Does the platform integrate with fitness wearables?
            </AccordionTrigger>
            <AccordionContent className="max-w-[28rem] lg:max-w-[32rem]">
              Yes, our platform integrates seamlessly with popular fitness
              wearables like Fitbit, Apple Watch, and Garmin devices. This
              allows you to sync your workout data, track your progress in
              real-time, and analyze your performance metrics effortlessly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Can I customize my workout plan?
            </AccordionTrigger>
            <AccordionContent className="max-w-[28rem] lg:max-w-[40rem]">
              Absolutely! Our platform offers flexible customization options for
              your workout plan. You can tailor your routines based on your
              fitness level, preferences, and goals. Whether you want to focus
              on strength training, cardio, or flexibility, you can adjust your
              workouts to fit your individual needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              How do I set fitness goals and milestones?
            </AccordionTrigger>
            <AccordionContent className="max-w-[28rem] lg:max-w-[40rem]">
              Setting fitness goals and milestones is easy with our platform.
              Simply navigate to the “Goals” section, where you can define
              specific, measurable targets such as weight loss, strength gains,
              or endurance improvements. You can also set milestones to track
              your progress along the way, helping to keep you motivated and on
              track.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Is there a mobile app version available?
            </AccordionTrigger>
            <AccordionContent className="max-w-[28rem] lg:max-w-[40rem]">
              Currently, there is no dedicated mobile app version available.
              However, our platform is fully optimized for mobile browsers,
              allowing you to access all features and track your workouts on the
              go. We are considering developing a native app in the future, so
              stay tuned for updates!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Do I need premium membership to access all features?
            </AccordionTrigger>
            <AccordionContent className="max-w-[28rem] lg:max-w-[40rem]">
              While many features are available for free, a premium membership
              unlocks additional functionalities, such as personalized coaching,
              advanced analytics, and exclusive workout plans. You can start
              with a free account and upgrade at any time to take advantage of
              the full range of features our platform offers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Container>
  );
};

export default FAQ;
