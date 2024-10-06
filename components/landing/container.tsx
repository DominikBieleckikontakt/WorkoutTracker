import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="mx-5 lg:mx-10 flex justify-center mb-16">
      <div className={`w-full max-w-[1500px] ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
