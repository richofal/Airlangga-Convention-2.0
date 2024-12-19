"use client";

import React, { useState } from "react";
import BackButton from "@/app/components/BackButton";

const ConfirmationPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <>
      <div className="mx-8 mt-5 lg:mx-28">
        <BackButton></BackButton>
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="w-full lg:w-1/2">
            <form action="" className="mt-5 w-full flex flex-col gap-6">
              <h1 className="text-2xl font-bold lg:text-4xl">
                Konfirmasi Pembayaran
              </h1>
              <div className="w-full flex flex-col gap-2 lg:text-xl">
                <div className="flex flex-row start items-center gap-6">
                  <p className="flex flex-row justify-between items-center w-[38%]">
                    <span>Nama Lengkap</span> <span>:</span>
                  </p>
                  <p>(Full Name)</p>
                </div>
                <div className="flex flex-row start items-center gap-6">
                  <p className="flex flex-row justify-between items-center w-[38%]">
                    <span>Asal Sekolah:</span> <span>:</span>
                  </p>
                  <p>(School Name)</p>
                </div>
                <div className="flex flex-row start items-center gap-6">
                  <p className="flex flex-row justify-between items-center w-[38%]">
                    <span>Kategori Tim</span> <span>:</span>
                  </p>
                  <p>(Putra/Putri)</p>
                </div>
                <div className="font-bold uppercase text-2xl mt-5 mb-5 font-weight-bold">
                  <h1>Sekolah A</h1>
                  <h1>VS</h1>
                  <h1>Sekolah B</h1>
                </div>
                <div className="flex flex-row start items-center gap-6">
                  <p>Sabtu, 27 Januari 2024 (08:00 - 09:05)</p>
                </div>
                <div className="flex flex-row start items-center gap-6">
                  <p className="flex flex-row justify-between items-center w-[38%]">
                    <span>Jumlah Tiket</span> <span>:</span>
                  </p>
                  <p>(Nominal Tiket)</p>
                </div>
                <div className="flex flex-row start items-center gap-6">
                  <p className="flex flex-row justify-between items-center w-[38%]">
                    <span>Harga</span> <span>:</span>
                  </p>
                  <p>(Price)</p>
                </div>
                <div className="flex flex-row start items-center gap-6">
                  <p className="flex flex-row justify-between items-center w-[38%]">
                    <span>DP Minimal</span> <span>:</span>
                  </p>
                  <p>(Price)</p>
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="paymentMethod">Metode Pembayaran*</label>
                  <select
                    name="paymentMethod"
                    id="paymentMethod"
                    className="w-2/3 px-2 py-2 rounded-lg border border-black"
                    defaultValue=""
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="" disabled>
                      -
                    </option>
                    <option value="BNI">BNI</option>
                  </select>
                </div>
                {paymentMethod === "BNI" && (
                  <div className="w-full flex flex-col items-start gap-2 mt-2">
                    <p>Nomor Rekening:</p>
                    <p className="text-xl font-bold">1817403392</p>
                    <p>(Shakila Az Zahra)</p>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start lg:text-xl">
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="ktpFile">
                    Bukti Pembayaran* <br /> Note: Format PDF/gambar (size limit
                    5 MB)
                  </label>
                  <input
                    type="file"
                    name="ktpFile"
                    className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                    accept=".pdf,image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && file.size > 5 * 1024 * 1024) {
                        alert("File size exceeds 5 MB");
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
                <div className="flex flex-row justify-start items-center gap-3 mt-2">
                  <input type="checkbox" className="p-6" />
                  <label htmlFor="" className="text-[0.8rem] lg:text-[1rem]">
                    Saya memastikan data yang diisi benar, dan siap menerima
                    sanksi jika terdapat kesalahan
                  </label>
                </div>
              </div>
              <button
                className="bg-black text-white px-5 py-2 rounded-lg flex flex-row justify-center items-center mt-0 w-1/4"
                onClick={(e) => {
                  e.preventDefault();
                  try {
                    window.location.href =
                      "/supporter/buy-ticket/konfirmasi/reminder";
                  } catch (error) {
                    console.error("Navigation error:", error);
                  }
                }}
              >
                DAFTAR
              </button>
            </form>
          </div>{" "}
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

export default ConfirmationPage;
