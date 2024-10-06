import React from "react";
import Container from "./container";
import Image from "next/image";
import { Button } from "../ui/button";

const ProductivityCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={`bg-white shadow-sm hover:shadow-lg duration-300 rounded-lg ${className}`}
    >
      <div className="bg-gray-100 rounded-t-lg flex justify-center items-center h-64">
        <Image
          src="/icons/image_placeholder.png"
          alt="placeholder"
          width={100}
          height={100}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">Some text</h3>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          atque architecto labore a dolores laborum cupiditate repudiandae,
          reiciendis ratione officia tempora obcaecati. Ullam voluptatum ducimus
          laudantium culpa ex repudiandae praesentium?
        </p>
      </div>
    </div>
  );
};

const Productivity = () => {
  return (
    <Container className="space-y-16">
      <div className="text-center space-y-6">
        <h3 className="font-extralight text-4xl lg:text-5xl">
          Tools to <span className="font-semibold">Elevate</span> Your
          Productivity
        </h3>
        <p className="text-gray-500 lg:mx-24 xl:mx-64">
          Explore powerful tools designed to streamline your creative progress.
          From seamless integrations to effortless content management, these
          features are built to enhance your productivity and creativity
        </p>
      </div>
      <div className="space-y-10">
        <div className="flex gap-10 flex-col lg:flex-row">
          <ProductivityCard />
          <ProductivityCard />
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <ProductivityCard />
          <ProductivityCard />
          <ProductivityCard />
        </div>
      </div>
      <div className="text-center">
        <Button
          className="rounded-xl z-10 py-6 relative after:content-[''] after:absolute after:w-full after:h-full after:-z-10 after:rounded-lg after:bg-primary after:blur-sm"
          size="lg"
        >
          Explore More
        </Button>
      </div>
    </Container>
  );
};

export default Productivity;
