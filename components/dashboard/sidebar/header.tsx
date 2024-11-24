import React from "react";

const SidebarMyHeader = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {isOpen ? (
        <p>
          Fitly<span className="text-primary text-3xl">.</span>
        </p>
      ) : (
        <p className="ml-1">
          F<span className="text-primary text-3xl">.</span>
        </p>
      )}
    </>
  );
};

export default SidebarMyHeader;
