"use client";

import React from "react";
import { CalendarDots, GpsFix } from "@phosphor-icons/react/dist/ssr";

const SupporterCard = ({
  school1,
  school2,
  gender,
  date,
  location,
}: {
  school1: string;
  school2: string;
  gender: string;
  date: string;
  location: string;
}) => {
  return (
    <div className="bg-white border-orange-300 rounded-lg p-6 max-w-md mx-auto shadow-md relative border-2 mt-3 w-full">
      <h1 className="text-md font-bold text-blue-900 mb-2 text-center inter-extra-bold">
        {school1.toUpperCase()}
      </h1>
      <div className="flex items-center mb-2 relative">
        <div className="flex-1 border-t border-gray-300"></div>
        <div className="absolute left-0 transform -translate-x-1/2 bg-blue-900 text-[#D4ECF8] rounded-full w-12 h-12 flex items-center justify-center text-xs -top-6 ml-4 inter-bold">
          {gender}
        </div>
        <div className="absolute right-0 transform translate-x-1/2 bg-blue-900 text-[#D4ECF8] rounded-full w-12 h-12 flex items-center justify-center text-xs -top-6 mr-4">
          VS
        </div>
      </div>
      <h1 className="text-md font-bold text-blue-900 mb-6 text-center inter-extra-bold">
        {school2.toUpperCase()}
      </h1>
      <div className="w-full flex flex-row justify-between">
        <div>
          <div className="flex justify-start items-center mb-4 gap-2">
            <CalendarDots size={20} />
            <span className="text-xs opacity-50">{date}</span>
          </div>
          <div className="flex justify-start items-center mb-2 gap-2">
            <GpsFix size={20} />
            <span className="text-xs opacity-50">{location}</span>
          </div>
        </div>
        <div className="flex items-center justify-end mt-3">
          <button
            className="bg-orange-500 text-white px-3 py-2 rounded-lg shadow-md font-bold text-sm lg:px-5 lg:py-3"
            onClick={() => (window.location.href = "/supporter/buy-ticket")}
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupporterCard;
