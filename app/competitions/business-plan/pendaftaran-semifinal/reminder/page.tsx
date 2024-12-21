import React from "react";
import BackButton from "@/app/components/BackButton";

const ConfirmationPage = () => {
  return (
    <>
      <div className="mx-8 mt-5 lg:mx-28">
        <BackButton></BackButton>
        <div className="mt-8 w-full flex flex-col h-auto gap-2 mb-60">
          <h1 className="text-2xl lg:text-6xl font-winter mt-3">
            Haiii Conners !!!
          </h1>
          <div className="flex flex-col gap-3 mt-3">
            {" "}
            <p className="text-md lg:text-2xl">
              Thank you sudah daftar yaaa...
            </p>
            <p className="text-md lg:text-2xl">
              Selanjutnya bisa langsung <b>konfirmasi pengumpulan proposal</b>{" "}
              ke {""}
              <a
                href="https://wa.me/6282133335529"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                0821-3333-5529 (Salman)
              </a>
              {""} atau{" "}
              <a
                href="https://wa.me/6282234923689"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                0822-3492-3689 (Marsha)
              </a>
            </p>
            <p className="text-md lg:text-2xl">
              Dengan format “Nama Tim_Proposal Bisnis_Subtema_Judul Bisnis_Nama
              Ketua”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
