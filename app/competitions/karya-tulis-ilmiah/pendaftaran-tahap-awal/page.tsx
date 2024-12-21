"use client";

import React from "react";
import BackButton from "@/app/components/BackButton";
import { useRouter } from "next/navigation";
import { ktiSchemaAwal } from "@/app/utils/schema";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const CompetitionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof ktiSchemaAwal>>({
    resolver: zodResolver(ktiSchemaAwal),
  });

  const router = useRouter();

  const onSubmit = (data: z.infer<typeof ktiSchemaAwal>) => {
    console.log(data);

    router.push(
      "/competitions/karya-tulis-ilmiah/pendaftaran-tahap-awal/reminder"
    );
  };

  return (
    <>
      <div className="mx-10 mt-5 lg:mx-28">
        <BackButton />
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div className="w-full flex flex-col gap-1 mt-5 text-4xl">
              <h1 className="font-winter uppercase w-full text-wrap">
                Pendaftaran Lomba
              </h1>
              <h1
                className="font-winter uppercase w-full text-wrap text-[#D4ECF8]"
                style={{
                  WebkitTextStroke: "1px #0A3981",
                }}
              >
                Karya Tulis Ilmiah
              </h1>
              <h1 className="font-winter uppercase w-full text-wrap">
                Tahap Awal (Abstrak)
              </h1>
            </div>
            <div className="mt-5 w-full">
              <form
                action=""
                className="flex flex-col gap-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="namaTim">Nama Tim*</label>
                    <input
                      type="text"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                      {...register("namaTim")}
                    />
                    {errors.namaTim && (
                      <p className="text-red-500 text-sm">
                        {errors.namaTim.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="asalSekolah">Asal Sekolah*</label>
                    <input
                      type="text"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                      {...register("asalSekolah")}
                    />
                    {errors.asalSekolah && (
                      <p className="text-red-500 text-sm">
                        {errors.asalSekolah.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="nomorTelepon">Nomor Telepon*</label>
                    <input
                      type="text"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                      {...register("nomorTelepon")}
                    />
                    {errors.nomorTelepon && (
                      <p className="text-red-500 text-sm">
                        {errors.nomorTelepon.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="text"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="anggota1">
                      Nama Lengkap Anggota 1 (Ketua)*
                    </label>
                    <input
                      type="text"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:w-[99%] lg:py-2"
                      {...register("anggota1")}
                    />
                    {errors.anggota1 && (
                      <p className="text-red-500 text-sm">
                        {errors.anggota1.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="anggota2">Nama Lengkap Anggota 2</label>
                    <input
                      type="text"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:w-[99%] lg:py-2"
                      {...register("anggota2")}
                    />
                    {errors.anggota2 && (
                      <p className="text-red-500 text-sm">
                        {errors.anggota2.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="anggota3">Nama Lengkap Anggota 3</label>
                    <input
                      type="text"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:w-[99%] lg:py-2"
                      {...register("anggota3")}
                    />
                    {errors.anggota3 && (
                      <p className="text-red-500 text-sm">
                        {errors.anggota3.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="ktpFile">Scan KTP/ Kartu Pelajar*</label>
                    <input
                      type="file"
                      className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                      {...register("ktpFile")}
                    />
                    {errors.ktpFile && (
                      <p className="text-red-500 text-sm">{errors.ktpFile.message}</p>
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="abstractFile">
                      File Abstrak (Format pdf, Size limit 5 MB)*
                    </label>
                    <input
                      type="file"
                      className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                      {...register("abstrakFile")}
                    />
                    {errors.abstrakFile && (
                      <p className="text-red-500 text-sm">{errors.abstrakFile.message}</p>
                    )}
                  </div>
                </div> */}
                <button
                  className="bg-black text-white px-8 py-3 rounded-lg flex flex-row justify-center items-center w-1/4"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="w-1/2 flex-row h-auto hidden lg:flex items-center justify-between">
            <div className="h-full px-[0.10rem] bg-black py-1 rounded-xl"></div>
            <div className="font-winter uppercase text-8xl ml-10">
              <h1
                className="text-[#D4ECF8]"
                style={{
                  WebkitTextStroke: "1px #0A3981",
                }}
              >
                #<span className="text-[#F9C84D]">Strive</span>
              </h1>
              <h1
                className="text-[#E38F49]"
                style={{
                  WebkitTextStroke: "1px #0A3981",
                }}
              >
                for
              </h1>
              <h1
                className="text-[#D4ECF8]"
                style={{
                  WebkitTextStroke: "1px #0A3981",
                }}
              >
                Excellence
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionPage;
