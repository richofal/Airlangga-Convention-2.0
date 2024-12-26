"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import {
  documentSchema5,
  documentSchema10,
  bPPreliminarySchema,
} from "@/app/utils/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createId } from "@paralleldrive/cuid2";
interface Files {
  name: string;
  file: File;
}

const CompetitionPage = () => {
  const [step, setStep] = useState(0);
  const [files, setFiles] = useState<Files[] | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof bPPreliminarySchema>>({
    resolver: zodResolver(bPPreliminarySchema),
  });

  const onSubmit = (data: z.infer<typeof bPPreliminarySchema>) => {
    const formData = new FormData();
    const id = createId();
    formData.append("id", id);

    // Append other data
    for (const key in data) {
      formData.append(key, data[key as keyof typeof data] as string);
    }

    let isFileValid = true;

    files?.forEach((file) => {
      let validate;
      if (file.name === "bmc") {
        validate = documentSchema10.safeParse(file.file);
      } else {
        validate = documentSchema5.safeParse(file.file);
      }

      if (validate.success) {
        formData.append(file.name, file.file);
      } else {
        isFileValid = false;
        alert("Salah satu file tidak valid atau melebihi batas ukuran");
      }
    });

    if (!isFileValid) return; // Exit early if any file is invalid

    fetch("/api/business-plan/preliminary", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        router.push(
          `/competitions/business-plan/pendaftaran-preliminary-round/konfirmasi?id=${id}`
        );
        reset();
      })
      .catch((error) => {
        console.error("Error Upload:", error);
      });
  };

  const nextStep = () => {
    if (step < 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="mx-10 mt-5 lg:mx-28">
      <BackButton />
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="w-full lg:w-1/2">
          {step === 0 ? (
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
                Business Plan
              </h1>
              <h1 className="font-winter uppercase w-full text-wrap">
                Preliminary Round (BMC)
              </h1>
            </div>
          ) : null}
          <div className="mt-5 w-full">
            <form
              action="post"
              className="flex flex-col gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              {step === 0 ? (
                <>
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
                      <label htmlFor="nomor_telepon_1">
                        Nomor Telepon Anggota 1 (Ketua)*
                      </label>
                      <input
                        id="nomor_telepon_1"
                        type="text"
                        className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                        {...register("nomor_telepon_1")}
                        required
                      />
                      {errors.nomor_telepon_1 && (
                        <p className="text-red-500 text-sm">
                          {errors.nomor_telepon_1.message}
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
                      <label htmlFor="nomor_telepon_2">
                        Nomor Telepon Anggota 2*
                      </label>
                      <input
                        id="nomor_telepon_2"
                        type="text"
                        className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                        {...register("nomor_telepon_2")}
                      />
                      {errors.nomor_telepon_2 && (
                        <p className="text-red-500 text-sm">
                          {errors.nomor_telepon_2.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="nama_anggota_3">
                        Nama Lengkap Anggota 3 (Opsional)
                      </label>
                      <input
                        id="nama_anggota_3"
                        type="text"
                        className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
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
                      <label htmlFor="nomor_telepon_3">
                        Nomor Telepon Anggota 3 (Opsional)
                      </label>
                      <input
                        id="nomor_telepon_3"
                        type="text"
                        className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2 lg:w-[99%]"
                        {...register("nomor_telepon_3")}
                      />
                      {errors.nomor_telepon_3 && (
                        <p className="text-red-500 text-sm">
                          {errors.nomor_telepon_3.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="subtema">Sub-Tema*</label>
                    <select
                      id="subtema"
                      className="w-2/3 px-2 py-2 rounded-lg border border-black lg:py-2 lg:w-[99%]"
                      defaultValue=""
                      {...register("subtema")}
                      required
                    >
                      <option value="" disabled>
                        -
                      </option>
                      <option value="Lingkungan">Lingkungan</option>
                      <option value="Kesehatan">Kesehatan</option>
                      <option value="Teknologi">Teknologi</option>
                      <option value="Ekonomi">Ekonomi</option>
                      <option value="Sosial Budaya">Sosial Budaya</option>
                      <option value="Pendidikan">Pendidikan</option>
                    </select>
                    {errors.subtema && (
                      <p className="text-red-500 text-sm">
                        {errors.subtema.message}
                      </p>
                    )}
                  </div>
                </>
              ) : null}

              {step === 1 ? (
                <>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="kartu_pelajar">
                        Scan Kartu Pelajar/Surat Keterangan Pelajar Aktif dari
                        Sekolah (PDF/gambar)* <br /> Note: Jadikan satu file
                        (size limit 10 MB)
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
                      <label htmlFor="bukti_follow">
                        Bukti Follow Akun Instagram dan TikTok*
                      </label>
                      <input
                        id="bukti_follow"
                        type="file"
                        className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                        accept=".pdf"
                        name="bukti_follow"
                        required
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setFiles((prev) => [
                              ...(prev || []),
                              { name: "bukti_follow", file },
                            ]);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="bukti_poster">
                        Bukti <i>Share</i> Poster*
                      </label>
                      <input
                        id="bukti_poster"
                        type="file"
                        className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                        accept=".pdf"
                        name="bukti_poster"
                        required
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setFiles((prev) => [
                              ...(prev || []),
                              { name: "bukti_poster", file },
                            ]);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="bmc">
                        Business Model Canvas (BMC) <br className="lg:hidden" />{" "}
                        (Format PDF, size limit 10 MB)*
                      </label>
                      <input
                        id="bmc"
                        type="file"
                        className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                        accept=".pdf"
                        name="bmc"
                        required
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setFiles((prev) => [
                              ...(prev || []),
                              { name: "bmc", file },
                            ]);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="surat_orisinalitas">
                        Surat Pernyataan Orisinalitas* <br /> Note: Format PDF
                        (size limit 10 MB)
                      </label>
                      <input
                        id="surat_orisinalitas"
                        type="file"
                        className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                        accept=".pdf"
                        name="surat_orisinalitas"
                        required
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setFiles((prev) => [
                              ...(prev || []),
                              { name: "surat_orisinalitas", file },
                            ]);
                          }
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : null}
              <div className="w-full mt-2 flex flex-row justify-between">
                {step > 0 && (
                  <button
                    className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center"
                    onClick={prevStep}
                    type="button"
                  >
                    Prev
                  </button>
                )}
                {step === 1 ? (
                  <button
                    className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center"
                    type="submit"
                  >
                    Submit
                  </button>
                ) : null}
                {step === 0 && (
                  <button
                    className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center"
                    onClick={nextStep}
                    type="button"
                  >
                    Next
                  </button>
                )}
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
