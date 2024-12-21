import React from "react";
import BackButton from "../components/BackButton";
import Image from "next/image";
import SupporterCard from "../components/supporter/SupporterCard";
import ComingSoon from "../components/ComingSoon";

const SupporterPage = () => {
  return (
    <div className="mx-10 mt-5 lg:mx-28">
      <BackButton />
      <div className="mt-8 relative overflow-hidden lg:py-12 flex flex-row justify-center items-center py-5 bg-[#0A3981] rounded-xl font-winter">
        {/* Gambar Supporter Kiri Mobile: */}
        <Image
          src="/supporter1.svg"
          width={90}
          height={90}
          alt="supporter"
          className="absolute top-2 left-2 lg:hidden"
        ></Image>
        {/* Gambar Supporter Kiri Desktop: */}
        <Image
          src="/supporter1.svg"
          width={300}
          height={300}
          alt="supporter"
          className="hidden top-4 left-9 lg:absolute lg:block"
        ></Image>
        {/* Title Mobile: */}
        <h1 className="uppercase text-4xl w-full text-white z-10 lg:hidden text-center">
          Supporter
        </h1>
        {/* Title Desktop */}
        <h1 className="uppercase w-full hidden lg:block text-white z-10 text-center text-8xl">
          Support Your Team
        </h1>
        {/* Gambar Supporter Kanan Mobile: */}
        <Image
          src="/supporter2.svg"
          width={90}
          height={90}
          alt="supporter"
          className="absolute top-2 right-2 lg:hidden"
        ></Image>
        {/* Gambar Supporter Kanan Desktop: */}
        <Image
          src="/supporter2.svg"
          width={300}
          height={90}
          alt="supporter"
          className="hidden top-2 right-10 lg:absolute lg:block"
        ></Image>
      </div>
      <div className="w-full mt-5 grid grid-cols-1 lg:grid-cols-3 gap-3">
        <SupporterCard
          school1="Sekolah A"
          school2="Sekolah B"
          gender="Boys"
          date="01-01-2025"
          location="GOR, Kampus C Unair"
        ></SupporterCard>
        <SupporterCard
          school1="Sekolah C"
          school2="Sekolah D"
          gender="Girls"
          date="02-01-2025"
          location="GOR, Kampus C Unair"
        ></SupporterCard>
        <SupporterCard
          school1="Sekolah E"
          school2="Sekolah F"
          gender="Boys"
          date="03-01-2025"
          location="GOR, Kampus C Unair"
        ></SupporterCard>
        <SupporterCard
          school1="Sekolah G"
          school2="Sekolah H"
          gender="Girls"
          date="04-01-2025"
          location="GOR, Kampus C Unair"
        ></SupporterCard>
        <SupporterCard
          school1="Sekolah I"
          school2="Sekolah J"
          gender="Boys"
          date="05-01-2025"
          location="GOR, Kampus C Unair"
        ></SupporterCard>
        <SupporterCard
          school1="Sekolah K"
          school2="Sekolah L"
          gender="Girls"
          date="06-01-2025"
          location="GOR, Kampus C Unair"
        ></SupporterCard>
      </div>
    </div>
  );
};

export default SupporterPage;
