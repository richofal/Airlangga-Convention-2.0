"use client";

import React from "react";
import BackButton from "@/app/components/BackButton";
import { useRouter } from "next/navigation";
import { documentSchema5, ktiSchemaAwal } from "@/app/utils/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Files {
  name: string;
  file: File;
}

const CompetitionPage = () => {
  const [files, setFiles] = React.useState<Files[]>([]);
  const [fileValid, setFileValid] = React.useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof ktiSchemaAwal>>({
    resolver: zodResolver(ktiSchemaAwal),
  });

  const router = useRouter();

  const onSubmit = (data: z.infer<typeof ktiSchemaAwal>) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key as keyof typeof data] as string);
    }

    files?.forEach((file) => {
      const validate = documentSchema5.safeParse(file.file);
      if (validate.success) {
        formData.append(file.name, file.file);
      } else {
        setFileValid(false);
        alert("Salah satu file tidak valid atau melebihi batas ukuran");
      }
    });

    if (fileValid) {
      fetch("/api/karya-tulis-ilmiah/awal", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          reset();
          router.push(
            "/competitions/karya-tulis-ilmiah/pendaftaran-tahap-awal/reminder"
          );
        })
        .catch((error) => {
          console.error("Error Upload:", error);
        });
    }
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
              Karya Tulis Ilmiah
            </h1>
            <h1 className="font-winter uppercase w-full text-wrap">
              Tahap Awal (Abstrak)
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
                    required
                    {...register("nama_tim")}
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
                  <label htmlFor="nomor_telepon">Nomor Telepon*</label>
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
                  <label htmlFor="email">Email *</label>
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
                    Nama Lengkap Anggota 1 (Ketua)*
                  </label>
                  <input
                    id="nama_anggota_1"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:w-[99%] lg:py-2"
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
                  <label htmlFor="nama_anggota_2">Nama Lengkap Anggota 2</label>
                  <input
                    id="nama_anggota_2"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:w-[99%] lg:py-2"
                    {...register("nama_anggota_2")}
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
                  <label htmlFor="nama_anggota_3">Nama Lengkap Anggota 3</label>
                  <input
                    id="nama_anggota_3"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:w-[99%] lg:py-2"
                    {...register("nama_anggota_3")}
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
                  <label htmlFor="kartu_pelajar">
                    Scan KTP/ Kartu Pelajar*
                  </label>
                  <input
                    id="kartu_pelajar"
                    type="file"
                    className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                    accept=".pdf"
                    name="kartu_pelajar"
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
              <div className="w-full flex flex-row justify-between gap-2">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="abstrak_paper">
                    File Abstrak (Format pdf, Size limit 5 MB)*
                  </label>
                  <input
                    id="abstrak_paper"
                    type="file"
                    className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                    accept=".pdf"
                    name="abstrak_paper"
                    required
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFiles((prev) => [
                          ...(prev || []),
                          { name: "abstrak_paper", file },
                        ]);
                      }
                    }}
                  />
                </div>
              </div>
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
  );
};

export default CompetitionPage;
