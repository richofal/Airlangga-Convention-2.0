"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    // Mobile Layout:
    <footer className="bg-black text-white p-8 mt-12">
      {/* Logo Section */}
      <div className="flex flex-col justify center items-start lg:flex-row lg:items-center lg:hidden">
        <Link href={"/"}>
          {" "}
          <Image
            src="/logo-aircon.png"
            alt="Airlangga Convention 2.0 Logo"
            width={150}
            height={43}
          />
        </Link>
        {/* About Us Section: */}
        <div className="flex flex-row gap-4 items-start justify-between w-full mb-11 mt-5">
          <div>
            <h2 className="font-bold mb-3">
              <Link href="/about-us">About Us</Link>
            </h2>{" "}
            <ul className="space-y-2">
              <li>
                <Link href={"/about-us"}>Airlangga Convention 2.0</Link>
              </li>
              <li>
                <Link href={"/"} className="opacity-50">
                  Opening Party
                </Link>
              </li>
              <li>
                <Link href={"/"} className="opacity-50">
                  Closing Party
                </Link>
              </li>
              <li>
                <Link href={"/supporter"}>Supporter</Link>
              </li>
              <li>
                <Link
                  href={
                    "https://drive.google.com/drive/folders/1Tf2h_VbgtYfKrqnOnBtJuRBYVnphlfzX?usp=drive_link"
                  }
                >
                  Sponsor & Media Partner
                </Link>
              </li>
            </ul>
          </div>
          {/* Competition Section: */}
          <div className="">
            <h2 className="font-bold mb-3">
              {" "}
              <Link href="/competitions">Competition</Link>
            </h2>{" "}
            <ul className="space-y-2">
              <li>
                {" "}
                <Link href="/competitions/karya-tulis-ilmiah">
                  Karya Tulis Ilmiah
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/competitions/infografis">Infografis</Link>
              </li>
              <li>
                {" "}
                <Link href="/competitions/try-out">Try Out</Link>
              </li>
              <li>
                {" "}
                <Link href="/competitions/mobile-legends">Mobile Legends</Link>
              </li>
              <li>
                {" "}
                <Link href="/competitions/business-plan">Business Plan</Link>
              </li>
              <li>
                {" "}
                <Link href="/competitions/basket">Basket</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Contact Us Section: */}
        <div>
          <h2 className="font-bold mb-3">Contact Us</h2>{" "}
          <p className="flex items-center justify-start space-x-2 mb-3">
            <FaInstagram className="text-xl" />
            <span>
              {" "}
              <Link href="https://www.instagram.com/airlanggaconvention?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                Instagram{" "}
              </Link>
            </span>
          </p>
          <p className="flex items-center justify-start space-x-2">
            <FaTiktok className="text-xl" />
            <span>
              {" "}
              <Link href="https://www.tiktok.com/@airlanggaconvention?is_from_webapp=1&sender_device=pc">
                TikTok{" "}
              </Link>
            </span>
          </p>
        </div>
        {/* Copyright Section: */}
        <div className="border-t border-white w-full mt-6"></div>{" "}
        <p className="mt-4 text-center opacity-70">&copy; Aircon 2.0</p>{" "}
      </div>
      {/*  */}
      {/* Desktop Layout: */}
      <div className="hidden lg:block w-full gap-3 mt-8 px-28">
        <div className="flex flex-row justify-between items-start gap-20">
          {/* Logo Section: */}
          <div className="">
            <Link href={"/"}>
              {" "}
              <Image
                src="/logo-aircon.png"
                width={200}
                height={200}
                alt="logo"
              ></Image>
            </Link>
          </div>
          {/* About Us, Competitions, Contact Us, and Copyright Section: */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-start item-start gap-16">
              <div className="text-xl">
                <h1 className="text-xl mb-2 font-bold">
                  {" "}
                  <Link href="/about-us">About Us</Link>
                </h1>
                <Link href="/about-us">Airlangga Convention 2.0</Link>
              </div>
              <div className="text-xl">
                <h1 className="text-xl mb-2 font-bold">
                  <Link href="/competitions">Competition</Link>
                </h1>
                <div className="w-full flex flex-col justify-start items-start gap-3">
                  <Link href="/competitions/karya-tulis-ilmiah">
                    Karya Tulis Ilmiah
                  </Link>
                  <Link href="/competitions/infografis">Infografis</Link>
                  <Link href="/competitions/try-out">Try Out</Link>
                  <Link href="/competitions/mobile-legends">
                    Mobile Legends
                  </Link>
                  <Link href="/competitions/business-plan">Business Plan</Link>
                  <Link href="/competitions/basket">Basket</Link>
                </div>
              </div>
              <div className="text-xl">
                <h1 className="text-xl mb-2 font-bold">Others</h1>
                <div className="w-full flex flex-col justify-start items-start gap-3">
                  <Link href="/" className="opacity-50">
                    Opening Party
                  </Link>
                  <Link href="/" className="opacity-50">
                    Closing Party
                  </Link>
                  <Link href="/supporter">Supporter</Link>
                  <Link href="https://drive.google.com/drive/folders/1Tf2h_VbgtYfKrqnOnBtJuRBYVnphlfzX?usp=drive_link">
                    Sponsor & Media Partner
                  </Link>
                </div>
              </div>
              <div className="text-xl">
                <h1 className="text-xl mb-2 font-bold">Contact Us</h1>
                <div className="w-full flex flex-col justify-start items-start gap-3">
                  <p className="flex items-center justify-start space-x-2">
                    <FaInstagram className="text-xl" />
                    <span>
                      {" "}
                      <Link href="https://www.instagram.com/airlanggaconvention?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        Instagram{" "}
                      </Link>
                    </span>
                  </p>
                  <p className="flex items-center justify-start space-x-2">
                    <FaTiktok className="text-xl" />
                    <span>
                      {" "}
                      <Link href="https://www.tiktok.com/@airlanggaconvention?is_from_webapp=1&sender_device=pc">
                        TikTok{" "}
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-white py-[0.015rem] mt-20"></div>
            <p className="mt-4 text-start opacity-70">&copy; Aircon 2.0</p>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
