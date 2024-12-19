"use client";

import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";

const CompetitionPage = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const [jumlahPemain, setJumlahPemain] = useState(7);

  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step < 1) {
      setStep((step) => step + 1);
    } else if (step === 1) {
      router.push("/competitions/basket/pendaftaran/konfirmasi");
    }
  };

  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step > 0) {
      setStep((step) => step - 1);
    }
  };

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <>
      <div className="mx-10 mt-5 lg:mx-28">
        <BackButton />
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="w-full lg:w-1/2">
            {step === 0 ? (
              <>
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
              </>
            ) : null}
            <div className="mt-5 w-full">
              <form action="" className="flex flex-col gap-8">
                {step === 0 ? (
                  <>
                    <div className="w-full flex flex-row justify-between gap-2">
                      <div className="flex flex-col w-1/2 gap-1">
                        <label htmlFor="namaTim">Nama Tim*</label>
                        <input
                          type="text"
                          name="namaTim"
                          className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                        />
                      </div>
                      <div className="flex flex-col w-1/2 gap-1">
                        <label htmlFor="asalSekolah">Asal Sekolah*</label>
                        <input
                          type="text"
                          name="asalSekolah"
                          className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between gap-2">
                      <div className="flex flex-col w-1/2 gap-1">
                        <label htmlFor="nomorTelepon">
                          Nomor Telepon Perwakilan*
                        </label>
                        <input
                          type="text"
                          name="nomorTelepon"
                          className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                        />
                      </div>
                      <div className="flex flex-col w-1/2 gap-1">
                        <label htmlFor="email">Email Perwakilan*</label>
                        <input
                          type="text"
                          name="email"
                          className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <label htmlFor="anggota1">
                          Nama Lengkap Perwakilan*
                        </label>
                        <input
                          type="text"
                          name="anggota1"
                          className="px-2 py-1 border border-black rounded-lg w-[98%]"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <label htmlFor="jumlahPemain">Jumlah Pemain*</label>
                        <select
                          name="jumlahPemain"
                          className="px-2 py-1 border border-black rounded-lg w-[98%]"
                          value={jumlahPemain || ""}
                          onChange={(e) =>
                            setJumlahPemain(Number(e.target.value))
                          }
                        >
                          <option value="" disabled>
                            -
                          </option>
                          {[7, 8, 9, 10, 11, 12].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {jumlahPemain > 0 &&
                      [...Array(jumlahPemain)].map((_, index) => (
                        <div
                          key={index}
                          className="w-full flex flex-row justify-between gap-2"
                        >
                          <div className="flex flex-col w-1/2 gap-1">
                            <label htmlFor={`namaPemain${index + 1}`}>
                              Nama Lengkap Pemain {index + 1}*
                            </label>
                            <input
                              type="text"
                              name={`namaPemain${index + 1}`}
                              className="px-2 py-1 border border-black rounded-lg w-[98%]"
                            />
                          </div>
                          <div className="flex flex-col w-1/2 gap-1">
                            <label htmlFor={`nomorPunggung${index + 1}`}>
                              Nomor Punggung Pemain {index + 1}*
                            </label>
                            <input
                              type="text"
                              name={`nomorPunggung${index + 1}`}
                              className="px-2 py-1 border border-black rounded-lg w-[98%]"
                            />
                          </div>
                        </div>
                      ))}
                    <div className="w-full flex flex-row justify-between gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <label htmlFor="ktpFile">
                          Scan KTP/Kartu Pelajar (PDF/gambar)* <br /> Note:
                          Jadikan satu file
                        </label>
                        <input
                          type="file"
                          name="ktpFile"
                          className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                          accept=".pdf"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file && file.size > 5 * 1024 * 1024) {
                              alert("File size exceeds 5 MB");
                              e.target.value = "";
                            }
                          }}
                        />
                      </div>
                    </div>
                  </>
                ) : null}
                {step === 1 ? (
                  <>
                    <h1 className="font-winter text-2xl -mb-7 mt-2">
                      Data Official
                    </h1>
                    <p>(Tidak terdaftar sebagai pemain)</p>
                    <div className="w-full flex flex-row justify-between gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <label htmlFor="namaCoach">Nama Lengkap Coach*</label>
                        <input
                          type="text"
                          name="namaCoach"
                          className="px-2 py-1 border border-black rounded-lg w-[98%]"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <label htmlFor="namaManager">
                          Nama Lengkap Manager*
                        </label>
                        <input
                          type="text"
                          name="namaManager"
                          className="px-2 py-1 border border-black rounded-lg w-[98%]"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <label htmlFor="namaOfficial">
                          Nama Lengkap Official*
                        </label>
                        <input
                          type="text"
                          name="namaOfficial"
                          className="px-2 py-1 border border-black rounded-lg w-[98%]"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <label htmlFor="ktpFile">
                          Kartu Identitas Tiap Official <br />
                          (KTP/Kartu Pelajar)* <br /> Note: Jadikan dalam 1 file
                        </label>
                        <input
                          type="file"
                          name="ktpFile"
                          className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                          accept=".pdf"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file && file.size > 10 * 1024 * 1024) {
                              alert("File size exceeds 10 MB");
                              e.target.value = "";
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between gap-2">
                      <div className="flex flex-col w-full gap-1">
                        <label htmlFor="posterFile">
                          Screenshot Share Poster Aircon*
                        </label>
                        <input
                          type="file"
                          name="posterFile"
                          className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                          accept=".pdf"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file && file.size > 10 * 1024 * 1024) {
                              alert("File size exceeds 10 MB");
                              e.target.value = "";
                            }
                          }}
                        />
                      </div>
                    </div>
                  </>
                ) : null}
                <div className="w-full mt-5 flex flex-row justify-start">
                  {step < 1 ? (
                    <button
                      className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  ) : null}
                </div>
                {step === 1 ? <></> : null}
                <div className="w-full mt-2 flex flex-row justify-between">
                  {step > 0 ? (
                    <button
                      className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center"
                      onClick={prevStep}
                      type="button"
                    >
                      Prev
                    </button>
                  ) : null}
                  {step === 1 ? (
                    <button
                      className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center"
                      onClick={nextStep}
                      type="button"
                    >
                      Next
                    </button>
                  ) : null}
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
    </>
  );
};

export default CompetitionPage;
