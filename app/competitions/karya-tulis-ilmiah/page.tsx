"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import {
  BookOpenText,
  CalendarDots,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";

const KaryaTulisIlmiahPage = () => {
  const [hovered, setHovered] = useState(false);
  const bgColor = "#1F519A";
  const router = useRouter();

  return (
    <>
      <div className="mx-10 mt-5 lg:mx-28">
        <BackButton />
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 lg:mt-3">
          <div
            className="flex flex-col justify-between items-start text-start gap-1 bg-[#1F519A] p-6 px-8 text-white rounded-xl relative overflow-clip w-full h-full mt-8 lg:col-span-1"
            style={{
              backgroundColor: hovered ? "#B6723A" : bgColor,
              animation: hovered ? "pulse 1s infinite" : "none",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <BookOpenText size={35} className="text-black animate-pulse" />
            </div>
            <Image
              src="/KTI.svg"
              width={200}
              height={200}
              alt="KTI"
              className="absolute bottom-32 left-52 lg:left-80 animate-spin"
            ></Image>
            <h1 className="font-winter mt-5 text-2xl w-3/4 text-wrap lg:mt-1">
              Karya Tulis Ilmiah
            </h1>
            <div>
              <p className="lg:mt-1">Biaya Pendaftaran:</p>
              <p>Registrasi Full Paper (Gel 2)</p>
              <p>Rp150.000,- /Tim</p>
            </div>
          </div>
          <div className="lg:w-full items-center lg:col-span-2">
            <h1 className="font-winter text-6 w-full text-4xl lg:mt-4">
              Lomba Karya Tulis Ilmiah
            </h1>
            <div className="w-full mt-5 flex flex-col gap-3">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <CalendarDots size={28} />
                <p className="text-sm">23 Desember 2024 - 11 Januari 2025</p>
              </div>
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <PhoneCall size={28} />
                <p className="text-sm">
                  <a
                    href="https://wa.me/6281394358165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    CP: +62 813-9435-8165 (Fajri)
                  </a>
                </p>
              </div>
            </div>
            <button
              className="hidden px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
              onClick={() =>
                router.push(
                  "#"
                  // "/competitions/karya-tulis-ilmiah/pendaftaran-tahap-awal"
                )
              }
            >
              Ditutup
              {/* Daftar Tahap Awal */}
            </button>{" "}
            <br />
            <button
              className="px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
              onClick={() =>
                router.push(
                  "/competitions/karya-tulis-ilmiah/pendaftaran-tahap-lanjut"
                )
              }
            >
              Daftar Tahap Lanjut
            </button>{" "}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-5 gap-5 lg:mt-10">
          <div className="w-full lg:w-1/2">
            <h1 className="font-winter text-2xl uppercase">Tema</h1>
            <p>
              “Sinergi Generasi Post-Millenial dan Teknologi dalam Menjawab
              Tantangan Menuju Indonesia Emas 2045”
            </p>
          </div>
          <div className="w-full">
            <h1 className="font-winter uppercase text-2xl">sub-tema</h1>
            <div className="w-full flex flex-row justify-between lg:justify-start lg:gap-5">
              <div>
                <p>Lingkup Sains dan Teknologi:</p>
                <ol className="list-decimal ml-4">
                  <li>Lingkungan</li>
                  <li>Kesehatan</li>
                  <li>Teknologi</li>
                </ol>
              </div>
              <div>
                <p>Lingkup Sosial dan Humaniora:</p>
                <ol className="list-decimal ml-4">
                  <li>Ekonomi</li>
                  <li>Sosial Budaya</li>
                  <li>Pendidikan</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 gap-1 lg:mt-10">
          <h1 className="text-2xl font-winter uppercase">Ketentuan Peserta:</h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-alpha pl-5 flex flex-col gap-1"
              style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Peserta merupakan siswa/i SMA atau SMK sederajat dari kelas X,
                XI, dan XII se-Indonesia, yang masih <b>AKTIF</b> dengan
                dibuktikan dengan <i>scan</i> Kartu Pelajar atau Surat
                Keterangan Pelajar dari Kepala Sekolah yang bersangkutan
              </li>
              <li className="text-wrap">
                Satu tim terdiri dari maksimal 3 orang pelajar SMA/SMK/MA
                sederajat se-Jawa Timur yang berasal dari sekolah yang sama
              </li>
              <li className="text-wrap">
                Setiap sekolah diperbolehkan untuk mengirim lebih dari 1
                kelompok
              </li>
              <li className="text-wrap">
                Setiap peserta hanya boleh terdaftar pada tepat 1 (satu) tim
                pada cabang kompetisi yang sama
              </li>
              <li className="text-wrap">
                Selama kompetisi berlangsung, peserta dilarang untuk mengubah
                komposisi tim
              </li>
              <li className="text-wrap">
                Peserta yang mendaftar berarti bersedia mengikuti seluruh
                rangkaian kegiatan
              </li>
              <li className="text-wrap">
                Ketika mengajukan pengunduran diri, uang pendaftaran pada tahap
                pendaftaran ulang tidak dapat ditarik kembali
              </li>
            </ol>
          </div>
        </div>
        {/* Ketentuan Pendaftaran Tahap Awal (Abstrak) */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            Ketentuan Pendaftaran TAHAP AWAL (Abstrak):
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Setiap tim diwajibkan mengirim berkas pendaftaran sebagai
                berikut:{" "}
              </li>
              <ul className="list-disc pl-4">
                <li>Abstrak</li>
                <li>
                  Surat Pernyataan Pendaftaran yang dapat diakses melalui{" "}
                  <i>link </i>
                  {/* */}
                  berikut:
                </li>
              </ul>
              <div className="flex flex-col justify-center items-start w-[85%] gap-2">
                <button
                  className="px-4 py-1 border border-black bg-white rounded-md m-1"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/document/d/1FJWrUerRRN2iHgJcsy20xSbkw75FQ5go4EUwtyvMzVA/edit?tab=t.0",
                      "_blank"
                    )
                  }
                >
                  Surat Pernyataan
                </button>{" "}
              </div>
              <ul className="list-disc pl-4">
                <li>
                  <i>Scan</i> Kartu Pelajar setiap peserta atau Surat Keterangan
                  dari Kepala Sekolah apabila calon peserta kompetisi tidak
                  dapat mengirimkan Kartu Pelajar
                </li>
              </ul>
              <li className="text-wrap">
                Berkas sebagaimana dimaksud dalam poin 1 dikirimkan dalam format
                PDF melalui formulir pendaftaran yang dapat dilakukan melalui
                Website Aircon 2.0
              </li>
              <li className="text-wrap">
                Setelah mengirim berkas pendaftaran, ketua tim wajib melakukan
                konfirmasi kepada CP : 081394358165 (Fajri) maksimal H+1 setelah
                melakukan pendaftaran dengan format “Konfirmasi Pendaftaran_Nama
                Sekolah_Nama Tim (Tokoh Pahlawan)_Nama Ketua Tim” paling lambat
                pada tanggal 11 Januari 2025 pukul 21:00 WIB. Contoh: Konfirmasi
                Pendaftaran_Soemitro Djojohadikoesoemo_SMA Trimurti_Amira
                Dinniah
              </li>
              <li className="text-wrap">
                Apabila terdapat tim yang telah melakukan pendaftaran tetapi
                tidak melakukan konfirmasi pendaftaran, maka dianggap{" "}
                <b>TIDAK MENDAFTARKAN DIRI</b>
              </li>
            </ol>
          </div>
        </div>
        {/* Ketentuan Pendaftaran Tahap Lanjut (Full Paper) */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            Ketentuan Pendaftaran Tahap Selanjutnya <br className="lg:hidden" />{" "}
            (Full Paper):
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Tim yang lolos seleksi abstrak dapat mengembangkan karya tulis
                ilmiah penuh sesuai dengan panduan yang diberikan oleh panitia,
                dilanjutkan pengumpulan karya <i>(paper)</i> beserta surat
                pernyataan orisinalitas. Surat Pernyataan Orisinalitas dapat
                diunduh melalui <i>link</i> berikut:
              </li>
              <div className="flex flex-col justify-center items-start w-[85%] gap-2">
                <button
                  className="px-4 py-1 border border-black bg-white rounded-md"
                  onClick={() =>
                    window.open(
                      "https://bit.ly/SuratPernyataanKeaslianKaryaLKTIAircon2024",
                      "_blank"
                    )
                  }
                >
                  Surat Keaslian Karya
                </button>{" "}
                <ul className="list-disc pl-4">
                  <li>
                    Lembar Pengesahan dapat diunduh melalui <i>link</i> berikut:
                  </li>
                </ul>
                <button
                  className="px-4 py-1 bg-white rounded-md border border-black"
                  onClick={() =>
                    window.open(
                      "https://bit.ly/LembarPengesahanLKTIAircon2024",
                      "_blank"
                    )
                  }
                >
                  Lembar Pengesahan
                </button>
              </div>
              <li className="text-wrap">
                Setiap tim diperkenankan membayar biaya pendaftaran sebesar:
              </li>
              <ol className="list-disc pl-4">
                <li>
                  Rp125.000,- untuk Gelombang 1 <br /> (16 - 23 Januari 2025)
                </li>
                <li>
                  Rp150.000,- untuk Gelombang 2 <br /> (24 - 30 Januari 2025)
                </li>
                <li>
                  Untuk mengikuti tahap berikutnya. Biaya dapat dikirim melalui:
                  MANDIRI: 1420021866396 A.N. ARIKA TRI WULANDARI
                </li>
                <li>
                  Apabila terjadi ekstensi, tanggal dan biaya pendaftaran akan
                  diinformasikan berikutnya pada laman media sosial Airlangga
                  Convention 2.0
                </li>
                <li>
                  Bukti transfer dengan format “Nama Sekolah_Nama Tim (tokoh
                  Pahlawan)_Nama Ketua Tim”
                </li>
              </ol>
              <li className="text-wrap">
                Semua berkas sebagaimana dimaksud dalam <b>poin a</b> dikirimkan
                dalam
                <b> format PDF</b>
              </li>
              <li>
                Dari tim yang mengirimkan <i>full paper</i>, 10 tim terbaik akan
                dipilih sebagai finalis dan melakukan presentasi karyanya secara
                offline di Universitas Airlangga
              </li>
              <li>
                Apabila peserta telah melakukan pembayaran dan pendaftaran ulang
                pada tahap <i>full paper</i>, maka pembayaran tidak dapat
                ditarik kembali
              </li>
              <li>
                Apabila terdapat tim yang telah melakukan pendaftaran tetapi
                <b> tidak melakukan konfirmasi</b> pendaftaran, maka dianggap{" "}
                <b>TIDAK MENDAFTARKAN DIRI</b>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Click to Download Full Guide Book */}
      <div className="w-full flex flex-row justify-between items-center text-center mt-8 mb-2">
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
        <a
          href="https://drive.google.com/drive/folders/1NjYSYYtaygay5H9q7jCGSjE0XBSU--Av?usp=drive_link"
          className="w-1/3 text-sm font-bold animate-pulse underline"
        >
          Click to Download Full Guide Book
        </a>
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
      </div>
      {/* Pengumuman Lolos Tahap Abstrak */}
      <div className="mx-10 mt-8 mb-2">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h1 className="font-winter text-xl w-3/4 text-wrap text-center">
            Pengumuman Lolos Tahap Abstrak
          </h1>
          <p className="text-sm text-center">
            Selamat! kepada tim-tim yang berhasil lolos Tahap Abstrak. Bagi tim
            yang telah lolos, selanjutnya akan memasuki Tahap Full Paper
          </p>
          <button
            className="py-2 px-4 rounded-lg text-sm bg-white shadow-lg"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1mHSCDcxIwaph0rTQ3-bVfNaMLm3NF8ut?usp=sharing",
                "_blank"
              )
            }
          >
            Cek Di Sini
          </button>
          <p className="text-sm text-center">
            Tetap semangat untuk semua peserta! Bagi yang belum lolos, jangan
            berkecil hati. Kesempatan lain masih terbuka lebar! Airlangga
            Convention 2.0 #StriveforExcellence
          </p>
          <div className="w-screen py-[0.05rem] bg-black"></div>
          <h1 className="font-winter text-xl w-3/4 text-wrap text-center">
            PENGUMUMAN FINALIS LKTI AIRCON 2.0
          </h1>
          <p className="text-sm text-center">
            Selamat! kepada tim-tim yang berhasil lolos Tahap Full Paper. Bagi
            tim yang telah lolos, selanjutnya akan memasuki Tahap Presentasi
            Final
          </p>
          <button
            className="py-2 px-4 rounded-lg text-sm bg-white shadow-lg"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1NQPC7WaYUFOWLvoGR35_64XBpFFIMMb8?usp=sharing",
                "_blank"
              )
            }
          >
            Cek Di Sini
          </button>
          <p className="text-sm text-center">
            Tetap semangat untuk semua peserta! Bagi yang belum lolos, jangan
            berkecil hati. Kesempatan lain masih terbuka lebar! Airlangga
            Convention 2.0 #StriveforExcellence
          </p>
        </div>
      </div>
    </>
  );
};

export default KaryaTulisIlmiahPage;
