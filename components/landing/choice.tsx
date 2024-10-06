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
    <div className="w-full p-5 rounded-lg hover:bg-white hover:shadow-md duration-300 lg:max-w-80">
      <Image
        src={iconSrc}
        width={50}
        height={50}
        alt="icon"
        className="bg-red-100 rounded-full p-2 mb-3"
      />
      <h5 className="text-lg font-semibold">{title}</h5>
      <p className="text-gray-500 font-light">{subtitle}</p>
    </div>
  );
};

const Choice = () => {
  return (
    <Container className="flex flex-col xl:flex-row justify-between max-xl:gap-10 my-36">
      <div className="flex flex-col justify-center xl:max-w-[30rem] gap-2">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          The <span className="font-semibold">Smarter Choice</span> for Health &
          Fitness
        </h3>
        <p className="text-gray-500 text-md">
          Reach your fitness goals with personalized plans and easy tracking,
          all in one simple platform.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <ChoiceCard
          iconSrc="/icons/biceps_icon.png"
          title="All-in-One Fitness Solution"
          subtitle="Track workouts, meals and hydration all in one app."
        />
        <ChoiceCard
          iconSrc="/icons/config_icon.png"
          title="Personalized Experience"
          subtitle="Tailor workout plans and goals to your fitness level."
        />
        <ChoiceCard
          iconSrc="/icons/chart_icon.png"
          title="Real-Time Progress Updates"
          subtitle="See live updates on calories, steps, and body composition."
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
