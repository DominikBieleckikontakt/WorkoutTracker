import React from "react";
import Container from "./container";
import Image from "next/image";

const ChoiceCard = ({
  iconSrc,
  title,
  subtitle,
}: {
  iconSrc: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="w-full p-5 rounded-lg hover:bg-white dark:hover:bg-black/30 hover:shadow-md duration-300 lg:max-w-80">
      <Image
        src={iconSrc}
        width={50}
        height={50}
        alt="icon"
        className="bg-red-100 rounded-full p-2 mb-3"
      />
      <h5 className="text-lg font-semibold">{title}</h5>
      <p className="text-text-light font-light">{subtitle}</p>
    </div>
  );
};

const Choice = () => {
  return (
    <Container className="flex flex-col xl:flex-row justify-between max-xl:gap-10 my-36">
      <div className="flex flex-col justify-center xl:max-w-[30rem] gap-2">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          Why Choose <span className="font-semibold">PulseFit</span>
          <span className="text-primary font-semibold">?</span>
        </h3>
        <p className="text-text-light text-md">
          Explore powerful features that help you stay consistent, improve
          performance, and reach your fitness milestones.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <ChoiceCard
          iconSrc="/icons/biceps_icon.png"
          title="Achievements & Challenges"
          subtitle="Get motivated with streaks, badges, and competitive challenges—alone or with friends."
        />
        <ChoiceCard
          iconSrc="/icons/config_icon.png"
          title="Personalized Workout Plans"
          subtitle="Custom training schedules designed around your goals, fitness level, and daily routine."
        />
        <ChoiceCard
          iconSrc="/icons/chart_icon.png"
          title="Progress Tracking & Insights"
          subtitle="Monitor every workout and see detailed insights into your improvements and personal bests."
        />
        <ChoiceCard
          iconSrc="/icons/phone_icon.png"
          title="Expert Support"
          subtitle="Access guidance from certified trainers for workouts and nutrition."
        />
      </div>
    </Container>
  );
};

export default Choice;
