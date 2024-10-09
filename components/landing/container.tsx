import React from "react";

const Container = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div className="mx-5 lg:mx-10 flex justify-center mb-16" id={id}>
      <div className={`w-full max-w-[1200px] ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
