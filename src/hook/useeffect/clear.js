import React, { useState, useEffect } from "react";
const ClearUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  });
  return (
    <div className="container flex justify-center items-center h-screen bg-black text-white">
      <h2 className="font-bold font-xl">
        The size of the window is <span className="text-pink-900"> {widthCount} </span>
      </h2>
    </div>

  );
};

export default ClearUp;