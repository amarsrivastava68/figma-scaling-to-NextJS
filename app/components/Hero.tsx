import React from "react";
import BlueArrow from "../../public/assets/blue-button.svg";
import Image from "next/image";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from '../../public/assets/Image.svg'
const Hero = () => {
  return (
    <div className="pt-4">
      <div className="px-5">
        <h1 className="text-[32px] text-center leading-[40px] font-medium text-[#172026]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 px-5 text-[#36485C] font-">
          Get a bird's eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
        <div className="flex w-full pt-8">
          <button className="bg-blue-600 py-4 px-8 text-white rounded-[4px] w-1/2">
            Try for free
          </button>
          <button className=" py-4 px-8  flex items-center justify-center gap-x-2 rounded-sm w-1/2">
            View pricing
            <span>
              <Image src={BlueArrow} alt="blue-arrow" />
            </span>
          </button>
        </div>
      </div>
      <div className="flex  h-full w-full justify-center  ">
        <Image
          src={Gradient}
          alt="gradient"
          className="min-h-[500px]  w-full object-cover"
        />
        <div className="bottom-5 absolute flex w-full flex-col items-center ">
            <Image src={HeroImage} alt="heroimage" className="-ml-4 h-[310px]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
