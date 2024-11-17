import React from "react";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div
        className={`size-12 rounded-full border-2 border-primary border-t-transparent animate-spin ${className} `}
      />
    </div>
  );
};

export default Loader;
