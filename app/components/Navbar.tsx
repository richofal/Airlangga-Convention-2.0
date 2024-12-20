"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { List, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    if (isClick) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isClick]);

  return (
    <nav
      className={` ${
        isClick ? "fixed z-20 top-0 left-0" : "relative"
      } w-full bg-[#EEEDE9] pt-10 pb-5`}
    >
      <div className="mx-auto px-10 sm:px-6 lg:mx-28 lg:px-0">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex-shrink-0 flex items-center py-2 focus:bg-none">
            <Link href="/" className="text-black">
              <Image
                src="/logo-aircon.png"
                alt="logo"
                width={150}
                height={150}
                className="object-contain lg:hidden"
              />
              <Image
                src="/logo-aircon.png"
                alt="logo"
                width={180}
                height={180}
                className="object-contain hidden lg:block"
              />
            </Link>
          </div>
          <div className="hidden lg:flex flex-row justify-center items-center gap-14 transition-all">
            <Link
              href="/"
              className="text-black group relative transition-all duration-300 ease-in-out hover:text-[#B6723A] rounded-lg lg:text-lg"
            >
              Home {/* */}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[#B6723A] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/about-us"
              className="text-black group relative transition-all duration-300 ease-in-out hover:text-[#B6723A] rounded-lg lg:text-lg"
            >
              About Us {/* */}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[#B6723A] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/competitions"
              className="text-black group relative transition-all duration-300 ease-in-out hover:text-[#B6723A] rounded-lg lg:text-lg"
            >
              Competition {/* */}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[#B6723A] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="/supporter"
              className="text-black group relative transition-all duration-300 ease-in-out hover:text-[#B6723A] rounded-lg lg:text-lg"
            >
              Supporter {/* */}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[#B6723A] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link
              href="https://drive.google.com/drive/folders/1Tf2h_VbgtYfKrqnOnBtJuRBYVnphlfzX?usp=drive_link"
              className="text-black group relative transition-all duration-300 ease-in-out hover:text-[#B6723A] rounded-lg lg:text-lg"
            >
              Sponsor {/* */}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[#B6723A] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </div>
          {/* Navbar Toggler (Hamburger Menu): */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              className="flex-col items-center justify-center p-1 py-3 rounded-lg text-black bg-white border border-black"
              onClick={toggleNavbar}
              style={{
                width: "50px",
                zIndex: 10,
              }}
            >
              <List className="text-black w-full" size={20} />
            </button>
          </div>
          {/* Register Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/competitions">
              <button className="flex flex-row justify-between items-center text-lg bg-white py-3 px-7 rounded-full shadow-lg space-x-2 gap-6 font-medium">
                Register
                <div className="p-2 bg-[#F9C84D] rounded-full">
                  <ArrowUpRight size={20} weight="bold" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Navbar on Mobile */}
      {isClick && (
        <div className="lg:hidden bg-white w-full mt-3 z-50 min-h-screen fixed left-0 overflow-y-auto">
          <div className="px-4 pt-4 pb-4 space-y-2 sm:px-6 bg-white rounded-lg flex flex-col gap-3">
            <Link
              href="/"
              className="text-black text-[16px] block hover:text-[#B6723A] hover:font-bold  rounded-lg pl-4"
              onClick={toggleNavbar}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              onClick={toggleNavbar}
            >
              About Us
            </Link>
            <Link
              href="/competitions"
              className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              onClick={toggleNavbar}
            >
              Competitions
            </Link>
            <Link
              href="/supporter"
              className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              onClick={toggleNavbar}
            >
              Supporter
            </Link>
            <Link
              href="https://drive.google.com/drive/folders/1Tf2h_VbgtYfKrqnOnBtJuRBYVnphlfzX?usp=drive_link"
              className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              onClick={toggleNavbar}
            >
              Sponsor
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
