import Image from "next/image";
import React from "react";

const Screens = () => {
  return (
    <div className="mx-5 lg:mx-10 flex justify-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-10 w-full max-w-[1700px]">
        <div className="bg-gray-200 row-span-2 rounded-lg flex justify-center items-center">
          <Image
            src="/icons/image_placeholder.png"
            alt="placeholder"
            className="opacity-30"
            width={100}
            height={100}
          />
        </div>
        <div className="bg-gray-200 rounded-lg h-80 flex justify-center items-center">
          <Image
            src="/icons/image_placeholder.png"
            alt="placeholder"
            className="opacity-30"
            width={100}
            height={100}
          />
        </div>
        <div className="bg-gray-200 rounded-lg h-80 flex justify-center items-center">
          <Image
            src="/icons/image_placeholder.png"
            alt="placeholder"
            className="opacity-30"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Screens;
