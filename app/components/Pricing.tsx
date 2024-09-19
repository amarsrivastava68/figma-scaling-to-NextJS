import React from "react";
import checkmark from '../../public/assets/check.svg'
import Image from "next/image";
const Pricing = () => {
  return (
    <div className="py-12 lg:py-15 ">
      <h1 className="text-black text-center  font-medium text-2xl lg:text-[42px]">
        Flexible Plans for you
      </h1>
      <p className="pt-4 pb-10 text-black text-center lg:text-[18px]">No hidden fees!</p>
      <div className="flex flex-col gap-y-6 lg:flex-row sm:flex-row sm:gap-x-6">
        <div className="w-full rounded-lg bg-slate-100 p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-medium text-blue-500 text-[18px]">
              Free Trial
            </h3>
          </div>
          <p className="pt-[12px] text-[16px] text-gray-500">
            Perfect for testing the waters
          </p>
          <h2 className="pt-4 text-2xl font-medium">0$<span className="text-slate-500">/mo</span></h2>
          <ul className="flex flex-col gap-y-2 pt-4">
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
              <li className="flex items-center gap-x-2 text-black">
                <span>
                  <Image src={checkmark} alt="checkmark"  className="text-white"/>
                </span>{" "}
               Fourteen fifteen sixteen
              </li>
            </ul>
            <button className="mt-4 rounded-[4px] bg-white py-[14px] font-medium text-blue-500">Start Trial</button>
        </div>
        <div className="w-full rounded-lg bg-indigo-500 text-white p-6 flex justify-between flex-col">
          <div>
            <h3 className="font-bold text-white text-[18px]">
              For Small Businesses
            </h3>
          </div>
          <p className="pt-[12px] text-[16px] text-white">
            Take first steps with ease!
          </p>
          <h2 className="pt-4 text-2xl font-medium">800$<span className="text-slate-300">/mo</span></h2>
          <ul className="flex flex-col gap-y-2 pt-4">
              <li className="flex items-center gap-x-2 lg:text-[18px]  text-white">
                <span>
                  <Image src={checkmark} alt="checkmark" />
                </span>{" "}
                One two three four
              </li>
              <li className="flex items-center gap-x-2 text-white ">
                <span>
                  <Image src={checkmark} alt="checkmark" />
                </span>{" "}
                Five six seven eidght
              </li>
              <li className="flex items-center gap-x-2 text-white">
                <span>
                  <Image src={checkmark} alt="checkmark"  className="text-white"/>
                </span>{" "}
                Eleven twelve thirteen
              </li>
              <li className="flex items-center gap-x-2 text-white">
                <span>
                  <Image src={checkmark} alt="checkmark"  className="text-white"/>
                </span>{" "}
              Fourteen fifteen sixteen
              </li>
            </ul>
            <button className="mt-4 rounded-[4px] bg-white py-[14px] font-medium text-blue-500">Get Started</button>
        </div>
        <div className="w-full rounded-lg bg-slate-100 justify-between   p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-blue-500 text-[18px]">
              Enterprise
            </h3>
          </div>
          <p className="pt-[12px] text-[16px] text-gray-500">
            Perfect for big companies
          </p>
          <h2 className="pt-4 text-2xl font-medium">1500$<span className="text-slate-500">/mo</span></h2>
         <h3 className="text-black text-[20px] mb-1">Custom</h3>
         <div className="text-[15px] p-2 border-blue-400 rounded-lg border">
            <p>Contact our comapny for further information </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore</p>

         </div>
                     <button className="mt-4 rounded-[4px] bg-white py-[14px] bottom-0 border-2 border-blue-500 font-medium text-blue-500">Contact Us

                     </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
