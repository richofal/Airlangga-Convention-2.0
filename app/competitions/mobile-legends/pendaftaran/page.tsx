"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import { mlSchema, documentSchema5 } from "@/app/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createId } from "@paralleldrive/cuid2";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Files {
  name: string;
  file: File;
}

const CompetitionPage = () => {
  const [files, setFiles] = useState<Files[] | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof mlSchema>>({
    resolver: zodResolver(mlSchema),
  });

  const onSubmit = (data: z.infer<typeof mlSchema>) => {
    const formData = new FormData();
    const id = createId();
    formData.append("id", id);

    for (const key in data) {
      formData.append(key, data[key as keyof typeof data]);
    }

    let isFileValid = true;

    files?.forEach((file) => {
      let validate;
      validate = documentSchema5.safeParse(file.file);

      if (validate.success) {
        formData.append(file.name, file.file);
      } else {
        isFileValid = false;
        alert("Salah satu file tidak valid atau melebihi batas ukuran");
      }
    });

    if (!isFileValid) return;

    fetch("/api/ml", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        router.push(
          `/competitions/mobile-legends/pendaftaran/konfirmasi?id=${id}`
        );
        reset();
      })
      .catch((error) => {
        console.error("Error Upload:", error);
      });
  };

  return (
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
              Mobile Legends
            </h1>
          </div>
          <div className="mt-5 w-full">
            <form
              action="post"
              className="flex flex-col gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-1/2 gap-1">
                  <label htmlFor="nama_tim">Nama Tim*</label>
                  <input
                    id="nama_tim"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                    {...register("nama_tim")}
                    required
                  />
                  {errors.nama_tim && (
                    <p className="text-red-500 text-sm">
                      {errors.nama_tim.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-1/2 gap-1">
                  <label htmlFor="asal_sekolah">Asal Sekolah*</label>
                  <input
                    id="asal_sekolah"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                    {...register("asal_sekolah")}
                    required
                  />
                  {errors.asal_sekolah && (
                    <p className="text-red-500 text-sm">
                      {errors.asal_sekolah.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-1/2 gap-1">
                  <label htmlFor="nomor_telepon">Nomor Telepon Kapten*</label>
                  <input
                    id="nomor_telepon"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                    {...register("nomor_telepon")}
                    required
                  />
                  {errors.nomor_telepon && (
                    <p className="text-red-500 text-sm">
                      {errors.nomor_telepon.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-1/2 gap-1">
                  <label htmlFor="email">
                    <br className="lg:hidden" />
                    Email Kapten*
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                    {...register("email")}
                    required
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
                  <label htmlFor="nama_anggota_1">
                    Nama Lengkap Kapten Tim*
                  </label>
                  <input
                    id="nama_anggota_1"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                    {...register("nama_anggota_1")}
                    required
                  />
                  {errors.nama_anggota_1 && (
                    <p className="text-red-500 text-sm">
                      {errors.nama_anggota_1.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="nickname_1">Nickname in Game Kapten*</label>
                  <input
                    id="nickname_1"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                    {...register("nickname_1")}
                    required
                  />
                  {errors.nickname_1 && (
                    <p className="text-red-500 text-sm">
                      {errors.nickname_1.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="nama_anggota_2">
                    Nama Lengkap Anggota 2*
                  </label>
                  <input
                    id="nama_anggota_2"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                    {...register("nama_anggota_2")}
                    required
                  />
                  {errors.nama_anggota_2 && (
                    <p className="text-red-500 text-sm">
                      {errors.nama_anggota_2.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="nickname_2">
                    Nickname in Game Anggota 2*
                  </label>
                  <input
                    id="nickname_2"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                    {...register("nickname_2")}
                    required
                  />
                  {errors.nickname_2 && (
                    <p className="text-red-500 text-sm">
                      {errors.nickname_2.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="nama_anggota_3">
                    Nama Lengkap Anggota 3*
                  </label>
                  <input
                    id="nama_anggota_3"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                    {...register("nama_anggota_3")}
                    required
                  />
                  {errors.nama_anggota_3 && (
                    <p className="text-red-500 text-sm">
                      {errors.nama_anggota_3.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="nickname_3">
                    Nickname in Game Anggota 3*
                  </label>
                  <input
                    id="nickname_3"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                    {...register("nickname_3")}
                    required
                  />
                  {errors.nickname_3 && (
                    <p className="text-red-500 text-sm">
                      {errors.nickname_3.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="nama_anggota_4">
                    Nama Lengkap Anggota 4*
                  </label>
                  <input
                    id="nama_anggota_4"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                    {...register("nama_anggota_4")}
                    required
                  />
                  {errors.nama_anggota_4 && (
                    <p className="text-red-500 text-sm">
                      {errors.nama_anggota_4.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="nickname_4">
                    Nickname in Game Anggota 4*
                  </label>
                  <input
                    id="nickname_4"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                    {...register("nickname_4")}
                    required
                  />
                  {errors.nickname_4 && (
                    <p className="text-red-500 text-sm">
                      {errors.nickname_4.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="nama_anggota_5">
                    Nama Lengkap Anggota 5 (Cadangan)*
                  </label>
                  <input
                    id="nama_anggota_5"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                    {...register("nama_anggota_5")}
                    required
                  />
                  {errors.nama_anggota_5 && (
                    <p className="text-red-500 text-sm">
                      {errors.nama_anggota_5.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="nickname_5">
                    Nickname in Game Anggota 5 (Cadangan)*
                  </label>
                  <input
                    id="nickname_5"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                    {...register("nickname_5")}
                    required
                  />
                  {errors.nickname_5 && (
                    <p className="text-red-500 text-sm">
                      {errors.nickname_5.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="kartu_pelajar">
                    Scan KTP/Kartu Pelajar (PDF/gambar)* <br /> Note: Jadikan
                    satu file (size limit 10 MB)
                  </label>
                  <input
                    id="kartu_pelajar"
                    type="file"
                    name="kartu_pelajar"
                    className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                    accept=".pdf"
                    required
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFiles((prev) => [
                          ...(prev || []),
                          { name: "kartu_pelajar", file },
                        ]);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="w-full mt-2 flex flex-row justify-between">
                <button
                  className="bg-black text-white px-8 py-3 rounded-lg flex flex-row justify-center items-center w-1/4"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>{" "}
        </div>
        <div className="w-1/2 flex-row h-auto hidden lg:flex items-center justify-between">
          <div className="h-full px-[0.10rem] bg-black py-1 rounded-xl"></div>
          <div className="font-winter uppercase text-8xl">
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
  );
};

export default CompetitionPage;
