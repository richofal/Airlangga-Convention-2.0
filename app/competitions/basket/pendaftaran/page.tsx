"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import { basketSchema, documentSchema } from "@/app/utils/schema";
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
  const [jumlahPemain, setJumlahPemain] = useState<number>(7);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof basketSchema>>({
    resolver: zodResolver(basketSchema),
  });

  const onSubmit = (data: z.infer<typeof basketSchema>) => {
    const formData = new FormData();
    const id = createId();
    formData.append("id", id);

    for (const key in data) {
      formData.append(key, data[key as keyof typeof data] as string);
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
    if (!isFileValid) return; // Exit early if any file is invalid

    fetch("/api/basket", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        router.push(`/competitions/basket/pendaftaran/konfirmasi?id=${id}`);
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
                Basket
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
                        <span className="text-red-500">
                          {errors.nama_tim.message}
                        </span>
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
                        <span className="text-red-500">
                          {errors.asal_sekolah.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-1/2 gap-1">
                      <label htmlFor="nomor_telepon">
                        Nomor Telepon Perwakilan*
                      </label>
                      <input
                        id="nomor_telepon"
                        type="text"
                        className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                        {...register("nomor_telepon")}
                        required
                      />
                      {errors.nomor_telepon && (
                        <span className="text-red-500">
                          {errors.nomor_telepon.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col w-1/2 gap-1">
                      <label htmlFor="email">
                        <br className="lg:hidden" />
                        Email Perwakilan*
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                        {...register("email")}
                        required
                      />
                      {errors.email && (
                        <span className="text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="nama_perwakilan">
                        Nama Lengkap Perwakilan*
                      </label>
                      <input
                        id="nama_perwakilan"
                        type="text"
                        className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                        {...register("nama_perwakilan")}
                        required
                      />
                      {errors.nama_perwakilan && (
                        <span className="text-red-500">
                          {errors.nama_perwakilan.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="jumlah_pemain">Jumlah Pemain*</label>
                      <select
                        id="jumlah_pemain"
                        className="px-2 py-1 border border-black rounded-lg w-[98%]"
                        value={jumlahPemain}
                        {...register("jumlah_pemain", { valueAsNumber: true })}
                        onChange={(e) => {
                          setJumlahPemain(Number(e.target.value));
                          console.log(jumlahPemain);
                        }}
                      >
                        {[7, 8, 9, 10, 11, 12].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {[...Array(jumlahPemain)].map((_, index) => (
                    <div
                      key={`player-${index}-${createId()}`}
                      className="w-full flex flex-row justify-between gap-2"
                    >
                      <div className="flex flex-col w-1/2 gap-1">
                        <label htmlFor={`nama_pemain_${index}`}>
                          Nama Lengkap Pemain {index + 1}*
                        </label>
                        <input
                          id={`nama_pemain_${index}`}
                          type="text"
                          className="px-2 py-1 border border-black rounded-lg w-[98%]"
                          {...register(`nama_pemain.${index}` as const)}
                          required
                        />
                        {errors.nama_pemain?.[index] && (
                          <span className="text-red-500">
                            {errors.nama_pemain[index]?.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col w-1/2 gap-1">
                        <label htmlFor={`nomor_punggung_${index}`}>
                          Nomor Punggung Pemain {index + 1}*
                        </label>
                        <input
                          id={`nomor_punggung_${index}`}
                          type="text"
                          className="px-2 py-1 border border-black rounded-lg w-[98%]"
                          {...register(`nomor_punggung.${index}` as const)}
                          required
                        />
                        {errors.nomor_punggung?.[index] && (
                          <span className="text-red-500">
                            {errors.nomor_punggung[index]?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                  <h1 className="font-winter text-2xl -mb-7 mt-2">
                    Data Official
                  </h1>
                  <p>(Tidak terdaftar sebagai pemain)</p>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="nama_coach">Nama Lengkap Coach*</label>
                      <input
                        id="nama_coach"
                        type="text"
                        className="px-2 py-1 border border-black rounded-lg w-[98%]"
                        {...register("nama_coach")}
                        required
                      />
                      {errors.nama_coach && (
                        <span className="text-red-500">
                          {errors.nama_coach.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="nama_manager">
                        Nama Lengkap Manager*
                      </label>
                      <input
                        id="nama_manager"
                        type="text"
                        className="px-2 py-1 border border-black rounded-lg w-[98%]"
                        {...register("nama_manager")}
                        required
                      />
                      {errors.nama_manager && (
                        <span className="text-red-500">
                          {errors.nama_manager.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="nama_official">
                        Nama Lengkap Official*
                      </label>
                      <input
                        id="nama_official"
                        type="text"
                        className="px-2 py-1 border border-black rounded-lg w-[98%]"
                        {...register("nama_official")}
                        required
                      />
                      {errors.nama_official && (
                        <span className="text-red-500">
                          {errors.nama_official.message}
                        </span>
                      )}
                    </div>
                  </div>
                </>
              ) : null}
              {step === 1 ? (
                <>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="kartu_pelajar">
                        Scan KTP/Kartu Pelajar Tiap Pemain (PDF/gambar)* <br />{" "}
                        Note: Jadikan satu file (size limit 10 MB)
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
                      <label htmlFor="kartu_official">
                        Kartu Identitas Tiap Official <br />
                        (KTP/Kartu Pelajar)* <br className="lg:hidden" /> Note:
                        Jadikan dalam 1 file <br className="lg:hidden" />{" "}
                        (Format PDF, size limit 10 MB)
                      </label>
                      <input
                        id="kartu_official"
                        type="file"
                        className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                        accept=".pdf"
                        name="kartu_official"
                        required
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setFiles((prev) => [
                              ...(prev || []),
                              { name: "kartu_official", file },
                            ]);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-full gap-1">
                      <label htmlFor="bukti_poster">
                        Surat Rekomendasi dari Sekolah{" "}
                        <br className="lg:hidden" /> (Format PDF, size limit 10
                        MB)*
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
