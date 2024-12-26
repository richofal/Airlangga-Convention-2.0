"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import { CalendarDots, PhoneCall, Exam } from "@phosphor-icons/react/dist/ssr";

const tryout = () => {
  const router = useRouter();

  return (
    <>
      <div className="mx-10 mt-5 lg:mx-28">
        <BackButton />
        {/* Kartu */}
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
                Rp70.000,00 /orang (Gelombang 1) <br />
                Rp85.000,00 /orang (Gelombang 2) <br />
                Rp100.000,00 /orang (Gelombang 3)
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
                <p className="text-sm">23 Desember 2024 - 8 Februari 2025</p>
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
            <p>Halo, para pejuang kampus!</p>
            <p>
              Yuk, siapkan dirimu untuk pengalaman seru dan penuh manfaat di
              {/* */}
              <b> Tryout & Campus Tour 2025</b>. Ini kesempatan emas buat kamu
              yang ingin mengasah kemampuan akademik sekaligus menjelajahi
              suasana kampus impian!
            </p>
            <p>📑 Gelombang Pendaftaran:</p>
            <ol className="list-disc pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Gelombang I: Coming Soon
                {/* Gelombang I: Rp70.000,- (23 Desember 2024 - 8 Januari 2025) */}
              </li>
              <li className="text-wrap">
                Gelombang II: Coming Soon
                {/* Gelombang II: Rp85.000,- (9 Januari 2025 - 24 Januari 2025) */}
              </li>
              <li className="text-wrap">
                Gelombang III: Coming Soon
                {/* Gelombang III: Rp100.000,- (25 Januari 2025 - 8 Februari 2025) */}
              </li>
            </ol>
            <p>📅 Tanggal Pelaksanaan: Sabtu, 15 Februari 2025</p>
            <p>
              📍 Lokasi: Gedung Kuliah Bersama, Kampus C Universitas Airlangga
            </p>
            <p>⏰ Waktu: 07:00 - Selesai</p>
          </div>
        </div>
        {/* Apa yang akan kamu dapatkan? */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            Apa yang akan kamu dapatkan?
          </h1>
          <div className="flex flex-col w-full gap-1">
            <p>
              📘 <b>Tryout Ujian Masuk Perguruan Tinggi</b> – Tes simulasi
              dengan soal-soal berbobot dan suasana ujian sesungguhnya!
            </p>
            <p>
              🏫 <b>Campus Tour</b> – Eksplorasi kampus, dari ruang kelas hingga
              fasilitas favorit mahasiswa!
            </p>
            <p>
              🎉 <b>Sesi Sharing & Talkshow</b> – Temui kakak-kakak inspiratif
              dan dapatkan tips lolos PTN!
            </p>
            <p>
              <b>🧑‍💻Vendor bimbel resmi!</b>
            </p>
            <p>
              Kami sedang berkolaborasi dengan lembaga bimbel terbaik agar kamu
              bisa mendapatkan soal-soal berkualitas dan pembahasan yang jelas.
              Stay tuned, ya!
            </p>
          </div>
        </div>
      </div>
      {/* Click to Download Full Guide Book */}
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
              Daftarkan dirimu sekarang dan siapkan dirimu menjadi pejuang
              kampus terbaik!
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default tryout;
