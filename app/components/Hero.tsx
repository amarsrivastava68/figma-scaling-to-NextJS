import React from "react";
import BlueArrow from "../../public/assets/blue-button.svg";
import Image from "next/image";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Trustpilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Clutch from "../../public/assets/Clutch.svg";

const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-5 lg:px-[280px]">
        <h1 className="text-[32px] lg:text-[70px] text-center leading-[40px] lg:leading-[72px] font-medium text-[#172026]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 px-5 lg:text-[18px] lg:leading-7 text-[#36485C] ">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
        <div className="flex w-full pt-8 justify-center items-center gap-x-6  ">
          <button className="bg-blue-600 py-4 px-7 text-white rounded-[4px] lg:w-fit w-1/2">
            Try for free
          </button>
          <button className=" py-4 px-7   flex items-center justify-center gap-x-2  lg:w-fit rounded-[4px]  w-1/2">
            View pricing
            <span>
              <Image src={BlueArrow} alt="blue-arrow" />
            </span>
          </button>
        </div>
      </div>
      <div className="flex  relative h-full w-full justify-center  ">
        <Image
          src={Gradient}
          alt="gradient"
          className="min-h-[500px]  w-full object-cover "
        />
        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-18 sm:h-[400px] lg:-mb-28 lg:h-auto md:h-[350px] xl:w-[70%]"           />
         
          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20 ">
            <p className="text-white text-center sm:pt-4 lg:text-[18px]  ">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 pt-4 lg:pt-0 sm:grid-cols-5  px-5 align-middle place-items-center justify-items-center">
              <Image src={Google} alt="google"></Image>
              <Image src={Slack} alt="slack"></Image>
              <Image src={Trustpilot} alt="trustpilot"></Image>
              <Image src={Cnn} alt="cnn"></Image>
              <Image src={Clutch} alt="clutch"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
