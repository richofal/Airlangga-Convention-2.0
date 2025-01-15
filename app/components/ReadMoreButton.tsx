"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

interface ReadMoreButtonProps {
  // onClick?: () => void;
  url: string;
  width: string;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  // onClick,
  url,
  width,
}) => {
  // const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  //   if (onClick) {
  //     onClick();
  //   }
  // };

  return (
    <button
      className={`flex flex-row px-[0.6rem] py-1 bg-white w-[${width}] rounded-full justify-between space-x-2 text-[10px] text-black items-center font-bold lg:py-2`}
      onClick={() => router.push(url)}
    >
      <p className="lg:ml-3 lg:text-[0.9rem]">Read More</p>
      <span className="p-2 rounded-full bg-[#F9C84D]">
        <FaArrowUp className="text-black transform rotate-45 lg:text-[0.9rem]" />
      </span>
    </button>
  );
};

export default ReadMoreButton;
