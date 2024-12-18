"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="bg-black text-white px-6 py-2 rounded-xl text-xs flex flex-row items-center gap-3"
      onClick={() => router.push("/")}
    >
      <ArrowLeft size={22} />
      <p className="lg:text-base">Back to home</p>
    </button>
  );
};

export default BackButton;
