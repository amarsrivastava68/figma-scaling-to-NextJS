import React from "react";
import logo from "../../public/assets/Logo.svg";
import Image from "next/image";
import User from "../../public/assets/User.svg";
import DropdownMenuDemo from "./Hamburger";
const NavLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20 ">
      <div className="flex items-center">
        <Image src={logo} alt="logo" />
      <div className="hidden lg:flex  sm:flex font-medium text-[#36485C] pl-[74px] gap-x-[56px]">
        {NavLinks.map((item, index)=>(
            <p key={index}>{item.name}</p>
        ))}
      </div>
      </div>
      <div className="flex gap-x-5 font-medium text-[#36485C]">
        <p className="hidden lg:block sm:block pr-[56px]">Open an account</p>
        <div className="flex gap-x-2 items-center">
          <Image src={User} alt="user profile" />
          <span className="hidden lg:block sm:block font-medium text-[#36485C]">
            Sign in
          </span>
        </div>
        {/* <Image className="lg:hidden sm:hidden" src={Menu} alt="menu button" />{" "} */}
        <div className="  items-center lg:hidden sm:hidden"><DropdownMenuDemo/> </div>
      </div>
    </nav>
  );
};

export default Navbar;
