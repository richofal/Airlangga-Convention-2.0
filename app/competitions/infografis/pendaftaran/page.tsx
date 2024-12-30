"use client";

import BackButton from "@/app/components/BackButton";
import { documentSchema, infografisSchema } from "@/app/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createId } from "@paralleldrive/cuid2";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
  } = useForm<z.infer<typeof infografisSchema>>({
    resolver: zodResolver(infografisSchema),
  });

  const onSubmit = (data: z.infer<typeof infografisSchema>) => {
    const formData = new FormData();
    const id = createId();
    formData.append("id", id);

    for (const key in data) {
      formData.append(key, data[key as keyof typeof data]);
    }

    let isFileValid = true;

    files?.forEach((file) => {
      if (documentSchema.safeParse(file.file).success) {
        formData.append(file.name, file.file);
      } else {
        isFileValid = false;
        alert("Salah satu file tidak valid atau melebihi batas ukuran");
      }
    });

    if (!isFileValid) return;

    fetch("/api/infografis", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        router.push(`/competitions/infografis/pendaftaran/konfirmasi?id=${id}`);
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
              Infografis
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
                  <label htmlFor="nama">Nama Lengkap*</label>
                  <input
                    id="nama"
                    type="text"
                    className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                    {...register("nama")}
                    required
                  />
                  {errors.nama && (
                    <p className="text-red-500 text-sm">
                      {errors.nama.message}
                    </p>
                  )}{" "}
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
                  )}{" "}
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
                  )}{" "}
                </div>
                <div className="flex flex-col w-1/2 gap-1">
                  <label htmlFor="email">Email*</label>
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
                  )}{" "}
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
              {/* <div className="flex flex-col w-full gap-1">
                <label htmlFor="file_infografis">
                  File Infografis <br className="lg:hidden" />
                  (Format PDF, Size limit 10 MB)*
                </label>
                <input
                  id="file_infografis"
                  type="file"
                  name="file_infografis"
                  className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                  accept=".pdf"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFiles((prev) => [
                        ...(prev || []),
                        { name: "file_infografis", file },
                      ]);
                    }
                  }}
                />
              </div> */}
              <button
                className="bg-black text-white px-8 py-3 rounded-lg flex flex-row justify-center items-center w-1/4"
                type="submit"
              >
                Submit
              </button>
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
