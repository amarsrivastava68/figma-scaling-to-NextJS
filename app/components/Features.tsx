import React from "react";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import checkmark from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";
import greenbutton from "../../public/assets/green-button.svg";
import pinkbutton from "../../public/assets/pink-button.svg";

import Image from "next/image";
const Features = () => {
  return (
   
      <div className=" px-5 container lg:px-15 mx-auto flex flex-col  gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
        <div className="flex flex-col sm:flex-row-reverse gap-x-6 items-center justify-between sm:w-full ">
          <Image
            src={Feature1}
            alt="feature 1 "
            className="hidden sm:block w-1/2"
          />
          <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
            <h3 className="font-medium  text-blue-500">Sales Monitoring</h3>
            <h1 className="pt-3 text-2xl font-medium text-black lg:text-[42px] lg:leading-[58px] ">
              Simplify your sales monitoring
            </h1>
            <Image src={Feature1} alt="feature 1 " className="pt-6 sm:hidden" />
            <p className="py-6 lg:text-[18px]  text-black">
              Stay on top of things and revamp your work progress with our game
              changing feature . Get a bird's eye view from our customizable
              dashboard.
            </p>
            <ul className="flex flex-col gap-y-3">
              <li className="flex items-center gap-x-2 lg:text-[18px] text-black">
                <span>
                  <Image src={checkmark} alt="checkmark" />
                </span>{" "}
                One two three four
              </li>
              <li className="flex items-center gap-x-2 text-black">
                <span>
                  <Image src={checkmark} alt="checkmark" />
                </span>{" "}
                Five six seven eidght
              </li>
              <li className="flex items-center gap-x-2 text-black">
                <span>
                  <Image src={checkmark} alt="checkmark" />
                </span>{" "}
                Eleven twelve thirteen
              </li>
            </ul>
            <p className="flex items-center gap-x-2 font-medium pt-6 text-blue-500">
              {" "}
              Learn More{" "}
              <span>
                <Image src={bluebutton} alt="blue button " />
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-6  justify-between sm:w-full ">
          <Image
            src={Feature2}
            alt="feature 2 "
            className="hidden sm:block w-1/2"
          />
          <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
            <h3 className="font-medium  text-green-500">Customer Support</h3>
            <h1 className="pt-3 text-2xl font-medium text-black lg:text-[42px] lg:leading-[58px] ">
              Simplify your sales monitoring
            </h1>
            <Image src={Feature2} alt="feature 2 " className="pt-6 sm:hidden" />
            <p className="py-6 lg:text-[18px]  text-black">
              Stay on top of things and revamp your work progress with our game
              changing feature . Get a bird's eye view from our customizable
              dashboard.
            </p>
            <ul className="flex flex-col gap-y-3">
              <li className="flex items-center gap-x-2 lg:text-[18px] text-black">
                <span>
                  <Image src={checkmark} alt="checkmark" />
                </span>{" "}
                One two three four
              </li>
              <li className="flex items-center gap-x-2 text-black">
                <span>
                  <Image src={checkmark} alt="checkmark" />
                </span>{" "}
                Five six seven eidght
              </li>
              <li className="flex items-center gap-x-2 text-black">
                <span>
                  <Image src={checkmark} alt="checkmark" />
                </span>{" "}
                Eleven twelve thirteen
              </li>
            </ul>
            <p className="flex items-center gap-x-2 font-medium pt-6 text-green-500">
              {" "}
              Learn More{" "}
              <span>
                <Image src={greenbutton} alt="blue button " />
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-x-6  justify-between sm:w-full ">
          <Image
            src={Feature3}
            alt="feature 3 "
            className="hidden sm:block w-1/2"
          />
          <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
            <h3 className="font-medium  text-pink-500">Growth Monitoring</h3>
            <h1 className="pt-3 text-2xl font-medium text-black lg:text-[42px] lg:leading-[58px] ">
              Simplify your sales monitoring
            </h1>
            <Image src={Feature3} alt="feature 3 " className="pt-6 sm:hidden" />
            <p className="py-6 lg:text-[18px]  text-black">
              Stay on top of things and revamp your work progress with our game
              changing feature . Get a bird's eye view from our customizable
              dashboard.
            </p>
            <div className="flex w-full gap-x-6 pt-6">
              <div className="w-1/2 flex flex-col gap-y-3">
                <h3 className="text-[20px] font-medium text-black">100+ </h3 >
                <p>lorem ipsum dolor sit</p>
              </div>
              <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-black">800+ </h3 >
                <p>conse elipiscit elit</p>
              </div>
            </div>
            <p className="flex items-center gap-x-2 font-medium pt-6 text-pink-500">
              {" "}
              Learn More{" "}
              <span>
                <Image src={pinkbutton} alt="blue button " />
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Features;
