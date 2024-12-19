import React from "react";
import BackButton from "@/app/components/BackButton";

const ConfirmationPage = () => {
  return (
    <>
      {/* start */}
      <div className="mx-8 mt-5 lg:mx-28">
        <BackButton></BackButton>
        <div className="mt-8 w-full flex flex-col h-auto gap-2 mb-60">
          <h1 className="text-2xl lg:text-6xl font-winter mt-3">
            Haiii Conners !!!
          </h1>
          <div className="flex flex-col gap-3 mt-3">
            <p className="text-sm lg:text-2xl">
              Thank you sudah daftar yaaa...
            </p>
            <p className="text-sm lg:text-2xl">
              Selanjutnya bisa langsung <b>konfirmasi pendaftaran</b> ke{" "}
              <br className="lg:hidden" />
              <a
                href="https://wa.me/6285706127776"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                0857-0612-7776 (Echa)
              </a>
            </p>
            <p className="text-sm lg:text-2xl">
              Dengan format “Konfirmasi Pendaftaran_Nama Lengkap Peserta_Asal
              Sekolah”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
