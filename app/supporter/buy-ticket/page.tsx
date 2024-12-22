"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";

const CompetitionPage = () => {
  const [step, setStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

  const nextStep = () => {
    router.push("/supporter/buy-ticket/konfirmasi");
  };

  useEffect(() => {
    console.log(step);
  }, [step]);

  useEffect(() => {
    const form = document.querySelector("form");
    if (form) {
      setIsFormValid(form.checkValidity());
    }
  }, [step]);

  const handleInputChange = () => {
    const form = document.querySelector("form");
    const ticketInput = document.querySelector(
      "#jumlahNominalTicket"
    ) as HTMLInputElement;
    if (form) {
      const isTicketInputValid = ticketInput
        ? ticketInput.checkValidity()
        : true;
      setIsFormValid(form.checkValidity() && isTicketInputValid);
    }
  };

  return (
    <div className="mx-10 mt-5 lg:mx-28">
      <BackButton />
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="w-full lg:w-1/2">
          {step === 0 ? (
            <div className="w-full flex flex-col gap-1 mt-5 text-4xl">
              <h1 className="font-winter uppercase w-full text-wrap">Form</h1>
              <h1
                className="font-winter uppercase w-full text-wrap text-[#D4ECF8]"
                style={{
                  WebkitTextStroke: "1px #0A3981",
                }}
              >
                Supporter Basket
              </h1>
            </div>
          ) : null}
          <div className="mt-5 w-full">
            <form action="" className="flex flex-col gap-8">
              {step === 0 ? (
                <>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-1/2 gap-1">
                      <label htmlFor="namaTim">Nama Lengkap Perwakilan*</label>
                      <input
                        type="text"
                        name="namaTim"
                        className="px-2 py-1 border border-black rounded-lg w-[98%]"
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col w-1/2 gap-1">
                      <label htmlFor="asalSekolah">
                        <br className="lg:hidden" /> Asal Sekolah*
                      </label>
                      <input
                        type="text"
                        name="asalSekolah"
                        className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="flex flex-col w-1/2 gap-1">
                      <label htmlFor="nomorTelepon">Nomor Telepon*</label>
                      <input
                        type="text"
                        name="nomorTelepon"
                        className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                      />
                    </div>
                    <div className="flex flex-col w-1/2 gap-1">
                      <label htmlFor="email">Email*</label>
                      <input
                        type="text"
                        name="email"
                        className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2">
                    <div className="w-1/2 flex flex-col gap-1">
                      <label htmlFor="jumlahTicket">Pilihan Tiket*</label>
                      <select
                        name="jumlahTicket"
                        id="jumlahTicket"
                        className="px-2 py-2 rounded-lg border border-black w-[98%]"
                        defaultValue=""
                        required
                        onChange={(e) => {
                          handleInputChange();
                          const value = e.target.value;
                          const ticketInput = document.querySelector(
                            "#jumlahNominalTicket"
                          ) as HTMLInputElement;
                          if (ticketInput) {
                            if (value.includes("-")) {
                              const [min, max] = value.split(" - ").map(Number);
                              ticketInput.setAttribute("min", min.toString());
                              ticketInput.setAttribute("max", max.toString());
                              ticketInput.parentElement?.classList.remove(
                                "hidden"
                              );
                              ticketInput.addEventListener("input", () => {
                                const inputValue = Number(ticketInput.value);
                                if (inputValue < min || inputValue > max) {
                                  ticketInput.setCustomValidity(
                                    `Please enter a value between ${min} and ${max}`
                                  );
                                } else {
                                  ticketInput.setCustomValidity("");
                                }
                                handleInputChange();
                              });
                            } else {
                              ticketInput.parentElement?.classList.add(
                                "hidden"
                              );
                              ticketInput.setCustomValidity("");
                            }
                          }
                        }}
                      >
                        <option value="" disabled>
                          -
                        </option>
                        <option value="50">50 Tiket</option>
                        <option value="51 - 74">51 - 74 Tiket</option>
                        <option value="75">75 Tiket</option>
                        <option value="76 - 99">76 - 99 Tiket</option>
                        <option value="100">100 Tiket</option>
                      </select>
                    </div>
                    <div className="w-1/2 flex flex-col gap-1 hidden">
                      <label htmlFor="jumlahNominalTicket">
                        Nominal Ticket*
                      </label>
                      <input
                        type="number"
                        id="jumlahNominalTicket"
                        name="jumlahNominalTicket"
                        className="px-2 py-2 border border-black rounded-lg w-[98%]"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </>
              ) : null}
              {step === 1 ? <></> : null}
              <div className="w-full mt-2 flex flex-row justify-between">
                {step == 0 ? (
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
  );
};

export default CompetitionPage;
