import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { HeroHL } from "./HeroHighlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#515AFF"
        />
        <Spotlight
          className="top-10 left-90 h-[80vh] w-[50vw]"
          fill="#1C28FF"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#1C28FF"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#517AFF"
        />
        {/* <HeroHL /> */}
      </div>
    </div>
  );
};

export default Hero;
