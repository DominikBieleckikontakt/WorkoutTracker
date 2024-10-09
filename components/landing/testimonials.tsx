import React from "react";
import Container from "./container";
import Image from "next/image";
import { TestimonialsArray } from "@/constants";

const Testimonial = ({
  className,
  content,
  userName,
  userTag,
  userAvatar,
  socialSrc,
}: {
  className?: string;
  content: string;
  userName: string;
  userTag: string;
  userAvatar: string;
  socialSrc: string;
}) => {
  return (
    <div className="bg-white shadow-sm border-gray-100 border p-5 rounded-lg flex flex-col justify-between space-y-5">
      <p>{content}</p>
      <div className="flex gap-3 items-center">
        <Image
          src="/icons/image_placeholder.png"
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full bg-gray-100 p-1 opacity-30"
        />
        <div>
          <h5 className="font-semibold">{userName}</h5>
          <div className="flex gap-1">
            <Image
              src={socialSrc}
              alt="social"
              width={20}
              height={20}
              className="rounded-full"
            />
            <p className="text-gray-500 text-sm">{userTag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <Container className="space-y-16 my-24 overflow-hidden relative">
      <div className="text-center space-y-6">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          Transformations That <span className="font-semibold">Inspire</span>
        </h3>
        <p className="text-gray-500 lg:mx-24 xl:mx-64">
          Real stories from users who achieved their fitness goals with
          PulseFit.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TestimonialsArray.map((item, index) => (
          <Testimonial
            key={index}
            content={item.content}
            userName={item.userName}
            userTag={item.userTag}
            userAvatar={item.userAvatar}
            socialSrc={item.socialSrc}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
    </Container>
  );
};

export default Testimonials;
