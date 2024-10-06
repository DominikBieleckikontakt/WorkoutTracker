import Image from "next/image";
import React from "react";
import Container from "./container";

const Screens = () => {
  return (
    <Container className="grid grid-cols-2 grid-rows-2 gap-10">
      <div className="bg-gray-100 row-span-2 rounded-lg flex justify-center items-center">
        <Image
          src="/icons/image_placeholder.png"
          alt="placeholder"
          className="opacity-30"
          width={100}
          height={100}
        />
      </div>
      <div className="bg-gray-100 rounded-lg h-80 flex justify-center items-center">
        <Image
          src="/icons/image_placeholder.png"
          alt="placeholder"
          className="opacity-30"
          width={100}
          height={100}
        />
      </div>
      <div className="bg-gray-100 rounded-lg h-80 flex justify-center items-center">
        <Image
          src="/icons/image_placeholder.png"
          alt="placeholder"
          className="opacity-30"
          width={100}
          height={100}
        />
      </div>
    </Container>
  );
};

export default Screens;
