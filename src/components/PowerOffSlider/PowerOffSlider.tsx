import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

const PowerOffSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleMouseDown = () => {
    setSliderPosition((prevPosition) => (prevPosition === 0 ? 75.8 : 0));
  };

  const containerClassName = classNames(
    "w-[16.75rem] h-12 rounded-lg relative",
    sliderPosition === 0 ? "bg-[#E5E5E5]" : "bg-[#37B3E2]"
  );

  return (
    <div
      className={containerClassName}
      style={{ transition: "background-color 0.5s ease" }}
    >
      <div className="absolute flex w-full h-full items-center justify-center">
        Slide to Power {sliderPosition === 0 ? "on" : "off"}
      </div>
      <div
        className="absolute w-16 h-12 bg-[#37B3E2] rounded-lg flex items-center justify-center"
        style={{ left: `${sliderPosition}%`, transition: "left 0.5s ease" }}
        onClick={handleMouseDown}
      >
        <Image
          width={27.6}
          height={30}
          src="/power-off-line-icon-white.svg"
          alt="Power Off"
        />
      </div>
    </div>
  );
};

export default PowerOffSlider;
