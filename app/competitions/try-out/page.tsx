"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import { CalendarDots, PhoneCall, Exam } from "@phosphor-icons/react/dist/ssr";

const Tryout = () => {
  const router = useRouter();

  return (
    <>
      <div className="mx-10 mt-5 lg:mx-28">
        <BackButton />
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 lg:mt-3">
          <div className="flex flex-col justify-between items-start text-start gap-1 bg-[#1F519A] p-6 px-8 text-white rounded-xl relative overflow-clip w-full h-full mt-8 lg:col-span-1">
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <Exam size={35} className="text-black animate-pulse" />
            </div>
            <Image
              src="/Tryout.svg"
              width={200}
              height={200}
              alt="KTI"
              className="absolute bottom-48 left-44 lg:left-72 lg:bottom-32 animate-bounce"
            ></Image>
            <h1 className="font-winter mt-5 text-2xl w-3/4 text-wrap lg:mt-1">
              Try Out & Tour
            </h1>
            <div>
              <p className="lg:mt-1">Biaya Pendaftaran:</p>
              <p>
                Rp60.000/orang (Presale 1) <br />
                Rp65.000/orang (Presale 2) <br />
                Rp70.000/orang (Presale 3)
              </p>
            </div>
          </div>
          <div className="lg:w-full items-center lg:col-span-2">
            <h1 className="font-winter text-6 w-full text-4xl lg:mt-4">
              Try Out & Tour
            </h1>
            <div className="w-full mt-5 flex flex-col gap-3">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <CalendarDots size={28} />
                <p className="text-sm">30 Desember 2024 - 9 Februari 2025</p>
              </div>
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <PhoneCall size={28} />
                <p className="text-sm">
                  <a
                    href="https://wa.me/6285755765943"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    CP: +62 857-5576-5943 (Salsa)
                  </a>
                </p>
              </div>
            </div>
            {/* Tombol Daftar */}
            <button
              className="px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
              onClick={() =>
                router.push(
                  "https://docs.google.com/forms/d/e/1FAIpQLSeku77Dw3BbT8An7L-ME55Leh_Sg2y8ifRu9Zxlyb9pexPEmQ/viewform?usp=sharing"
                )
              }
            >
              Daftar Sekarang
            </button>{" "}
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 gap-1 lg:mt-10">
          <h1 className="text-2xl font-winter uppercase">
            🎓 T&T (TRYOUT & CAMPUS TOUR) AIRLANGGA CONVENTION 2.0 🎓
          </h1>
          <div className="flex flex-col w-full gap-1">
            <p>Halo, Pejuang Kampus Impian! 👋</p>
            <p>
              Selamat datang di Try Out UTBK & Campus Tour Airlangga Convention
              2.0! Acara ini dirancang khusus untuk membantu kalian semua dalam
              mempersiapkan UTBK dengan lebih percaya diri serta memberikan
              pengalaman seru menjelajahi Kampus Universitas Airlangga.
            </p>
          </div>
          <div className="w-full flex flex-col mt-5 gap-1">
            <h1 className="text-2xl font-winter uppercase">
              ✨ Apa yang akan kamu dapatkan?
            </h1>
            <div className="flex flex-col w-full gap-1">
              <ol className="list-disc pl-5 flex flex-col gap-1">
                <li>E-Certificate untuk menambah portofolio prestasi!</li>
                <li>
                  Soal dan pembahasan Tryout lengkapi di tiap cabang Neutron.
                </li>
                <li>
                  Prediksi Kelulusan Universitas Airlangga dengan analisis
                  akurat!
                </li>
                <li>Reward Eksklusif bagi peserta dengan nilai tertinggi.</li>
                <li>Talk Show Inspiratif bersama pembicara inspiratif!</li>
                <li>
                  Kesempatan mengikuti <i>Campus Tour</i> dan mengenal
                  lingkungan Kampus Universitas Airlangga secara langsung.
                </li>
                <li>Konsumsi dan Hadiah-Hadiah Menarik lainnya!</li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col mt-5 gap-1">
            <h1 className="text-2xl font-winter uppercase">
              📅 Timeline Pendaftaran:
            </h1>
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Presale 1: [30 Des 2024 - 12 Jan 2025] <b>Rp60.000</b>
              </li>
              <li className="text-wrap">
                Presale 2: [13 Jan - 26 Jan 2025] <b>Rp65.000</b>
              </li>
              <li className="text-wrap">
                Presale 3: [27 Jan - 9 Feb 2025] <b>Rp70.000</b>
              </li>
            </ol>
          </div>
          <div className="w-full flex flex-col mt-5 gap-1">
            <h1 className="text-2xl font-winter uppercase">📍 Detail Acara:</h1>
            <ol className="list-disc pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Hari, Tanggal: Sabtu, 15 Februari 2025
              </li>
              <li className="text-wrap">Waktu: 07.00 - Selesai</li>
              <li className="text-wrap">
                Lokasi: Gedung Kuliah Bersama (GKB) Kampus C, Universitas
                Airlangga
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center text-center mt-8 mb-2">
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
        <a
          href="https://drive.google.com/drive/folders/1NofthcFt3ddTw3zNfW8zYnOaOP2ffCGw"
          className="w-1/3 text-sm font-bold underline animate-pulse"
        >
          Click to Download Full Guide Book
        </a>
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
      </div>
      <div className="mx-10 mt-8 mb-2">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <p className="text-sm text-center">
            <b>
              Persiapkan diri kalian untuk meraih skor terbaik dan temukan
              pengalaman baru yang tak terlupakan bersama kami! 💪✨
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Tryout;
