"use client";

import Image from "next/image";
import { BookOpenText } from "@phosphor-icons/react/dist/ssr";
import { Newspaper } from "@phosphor-icons/react/dist/ssr";
import { GameController } from "@phosphor-icons/react/dist/ssr";
import { FileText } from "@phosphor-icons/react/dist/ssr";
import { Basketball } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CompetitionCard = ({
  title,
  price,
  imageSrc,
  bgColor = "#1F519A",
  route,
}: {
  title: string;
  price: React.ReactNode;
  imageSrc: string;
  bgColor?: string;
  route: String;
}) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes("karya tulis ilmiah")) {
      return <BookOpenText size={35} className="text-black" />;
    } else if (title.toLowerCase().includes("infografis")) {
      return <Newspaper size={35} className="text-black" />;
    } else if (title.toLowerCase().includes("try out")) {
      return <Newspaper size={35} className="text-black" />;
    } else if (title.toLowerCase().includes("mobile legends")) {
      return <GameController size={35} className="text-black" />;
    } else if (title.toLowerCase().includes("business plan")) {
      return <FileText size={35} className="text-black" />;
    } else if (title.toLowerCase().includes("basket")) {
      return <Basketball size={35} className="text-black" />;
    } else {
      return <Newspaper size={35} className="text-black" />;
    }
  };

  return (
    <div
      className="flex flex-col justify-between items-start text-start gap-3 p-6 px-8 text-white rounded-xl relative overflow-hidden w-full lg:w-full lg:py-10 cursor-pointer transition-all ease-in-out hover:shadow-2xl"
      style={{
        backgroundColor: hovered ? "#B6723A" : bgColor,
        animation: hovered ? "pulse 1s infinite" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        router.push(`/competitions/${route}`);
      }}
    >
      <div className="p-3 rounded-full bg-[#D9D9D9]">{getIcon(title)}</div>
      <Image
        src={imageSrc}
        width={150}
        height={150}
        alt={title}
        className="absolute bottom-36 left-56 lg:left-[18rem] lg:bottom-31 lg:w-64 lg:h-64"
      />
      <h1 className="text-2xl w-3/4 font-winter mt-3">{title}</h1>
      <div>
        <p>Biaya Pendaftaran:</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CompetitionCard;
