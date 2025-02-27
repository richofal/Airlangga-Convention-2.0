import React from "react";
import BackButton from "@/app/components/BackButton";

const ConfirmationPage = () => {
  return (
    <div className="mx-8 mt-5 lg:mx-28">
      <BackButton></BackButton>
      <div className="mt-8 w-full flex flex-col h-auto gap-2 mb-60">
        <h1 className="text-2xl lg:text-6xl font-winter mt-3">
          Haiii Conners !!!
        </h1>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-md lg:text-2xl">Thank you sudah daftar yaaa...</p>
          <p className="text-md lg:text-2xl">
            Selanjutnya bisa langsung konfirmasi ke nomor{" "}
            <a
              href="https://wa.me/6281394358165"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              0813-9435-8165 (Fajri)
            </a>
          </p>
          <p className="text-md lg:text-2xl">
            Dengan format “Konfirmasi Pendaftaran_Nama Sekolah_Nama Tim (Tokoh
            Pahlawan)_Nama Ketua Tim”
          </p>
          <p className="text-md lg:text-2xl">
            Contoh: Konfirmasi Pendaftaran_SMA Trimurti_Soemitro
            Djojohadikoesoemo_Amira Dinniah
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
