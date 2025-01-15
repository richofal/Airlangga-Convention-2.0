"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import { CalendarDots, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { Newspaper } from "@phosphor-icons/react";

const Infografis = () => {
  const router = useRouter();

  return (
    <>
      <div className="mx-10 mt-5 lg:mx-28">
        <BackButton />
        {/* Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 lg:mt-3">
          <div className="flex flex-col justify-between items-start text-start gap-1 bg-[#1F519A] p-6 px-8 text-white rounded-xl relative overflow-clip w-full h-full mt-8 lg:col-span-1">
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <Newspaper size={35} className="text-black animate-pulse" />
            </div>
            <Image
              src="/Infografis.svg"
              width={200}
              height={200}
              alt="KTI"
              className="absolute bottom-32 left-52 lg:left-80 animate-bounce"
            ></Image>
            <h1 className="font-winter mt-5 text-2xl w-3/4 text-wrap lg:mt-1">
              Infografis
            </h1>
            <div>
              <p className="lg:mt-1">Biaya Pendaftaran:</p>
              <p>
                Rp40.000,- /orang (Gelombang 1) <br /> Rp50.000,- /orang
                (Gelombang 2)
              </p>
            </div>
          </div>
          <div className="lg:w-full items-center lg:col-span-2">
            <h1 className="font-winter text-6 w-full text-4xl lg:mt-4">
              Lomba Poster Infografis
            </h1>
            <div className="w-full mt-5 flex flex-col gap-3">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <CalendarDots size={28} />
                <p className="text-sm">23 Desember 2024 - 18 Januari 2025</p>
              </div>
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <PhoneCall size={28} />
                <p className="text-sm">
                  <a
                    href="https://wa.me/6285706127776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    CP: +62 857-0612-7776 (Echa)
                  </a>
                </p>
              </div>
            </div>
            {/* Tombol Daftar */}
            <button
              className="px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
              onClick={() =>
                router.push("/competitions/infografis/pendaftaran")
              }
            >
              Daftar Sekarang
            </button>{" "}
          </div>
        </div>
        {/* Tema */}
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
        {/* Ketentuan Peserta */}
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
                Lomba bersifat individu dan karya bersifat orisinil dan belum
                pernah dipublikasikan dan diikutkan dalam lomba manapun
              </li>
              <li className="text-wrap">
                Setiap instansi diperbolehkan untuk mengirim lebih dari 1 (satu)
                peserta
              </li>
              <li className="text-wrap">
                Setiap peserta hanya diperbolehkan mengirim maksimal 1 (satu)
                karya
              </li>
              <li className="text-wrap">
                Setiap peserta membayar biaya registrasi sejumlah yang sudah
                tercantum di mekanisme pendaftaran
              </li>
              <li className="text-wrap">
                Peserta bersedia mentaati seluruh peraturan yang dibuat oleh
                penyelenggara lomba
              </li>
              <li className="text-wrap">
                Peserta yang terbukti melanggar peraturan diberikan sanksi
                berupa <b>DISKUALIFIKASI</b>
              </li>
              <li>
                Hak cipta poster publik adalah milik peserta, panitia AIRCON
                memiliki hak dan wewenang untuk mempublikasikan setiap karya
                pemenang dengan tetap mencantumkan identitas penulis
              </li>
              <li>Keputusan juri bersifat mutlak dan dapat diganggu gugat</li>
            </ol>
          </div>
        </div>
        {/* Ketentuan Pendaftaran Tahap Awal (Abstrak) */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            Ketentuan Pendaftaran:
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Peserta diwajibkan mengirim berkas pendaftaran sebagai berikut:{" "}
              </li>
              <ul
                className="list-disc pl-4"
                style={{ listStyleType: "lower-alpha" }}
              >
                <li>
                  Surat Pernyataan Orisinalitas Karya yang telah ditandatangani,
                  template surat dapat diakses melalui link berikut:
                  <div className="flex flex-col justify-center items-start w-[85%] gap-2">
                    <button
                      className="px-4 py-1 border border-black bg-white rounded-md m-1"
                      onClick={() =>
                        window.open(
                          "https://bit.ly/SuratPernyataanOrisinalitasPOSTERAircon2024",
                          "_blank"
                        )
                      }
                    >
                      Pernyataan Orisinalitas
                    </button>{" "}
                  </div>
                </li>
                <li>
                  Scan Kartu Identitas peserta atau Surat Keterangan yang
                  menyatakan Identitas peserta, dapat mengirim surat keterangan
                  dari Kepala Sekolah apabila calon peserta kompetisi tidak
                  dapat mengirimkan Kartu Pelajar atau Kartu Identitas apapun
                </li>
                <li>Karya yang akan dilombakan</li>
              </ul>
              <li className="text-wrap">
                Semua berkas pendaftaran sebagaimana dimaksud dalam poin 1
                dikirimkan dalam format PDF
              </li>
              <li className="text-wrap">
                Berkas sebagaimana dimaksud dalam poin 1 dikirimkan melalui
                formulir pendaftaran yang dapat dilakukan melalui Website Aircon
                2.0
              </li>
              <li className="text-wrap">
                <ul className="list-none">
                  <li>
                    Setelah mengirim berkas pendaftaran dan melakukan
                    pembayaran, peserta wajib melakukan konfirmasi dan mengirim
                    bukti transfer dan tangkapan layar sudah mengirim Google
                    form kepada CP: 085706127776 (ECHA) maksimal H+1 setelah
                    melakukan pendaftaran <br />- Dengan format “Konfirmasi
                    Pendaftaran_Nama Lengkap Peserta_Asal Sekolah” <br />-
                    Contoh: Konfirmasi Pendaftaran_Nama Lengkap Peserta_Asal
                    Sekolah <br />- Paling lambat jam 23.59 sesuai dengan
                    ketentuan timeline yang tertera
                  </li>
                </ul>
              </li>
              <li>
                Biaya yang telah dibayarkan tidak dapat dikembalikan dengan
                alasan Apapun
              </li>
              <li>
                Penyelenggara lomba tidak akan menerima karya yang dikirim
                melewati tanggal dan waktu yang telah ditentukan
              </li>
              <li>
                Karya yang telah dikirim tidak diperbolehkan untuk ditarik dan
                Dimodifikasi
              </li>
              <li>
                Apabila terdapat peserta yang telah melakukan pendaftaran tetapi
                tidak melakukan konfirmasi pendaftaran, maka dianggap{" "}
                <b>TIDAK MENDAFTARKAN DIRI</b>
              </li>
            </ol>
          </div>
        </div>
        {/* Ketentuan Pendaftaran Tahap Lanjut (Full Paper) */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">Ketentuan Poster:</h1>
          <div className="flex flex-col w-full gap-1">
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Teknis dan gaya visualisasi bebas, orisinil, asli 100% buatan
                sendiri dan tidak memakai elemen yang melanggar hak cipta dan
                etika pembuatan karya cipta (bukan plagiasi)
              </li>
              <li>Jumlah poster 1 (satu) lembar</li>
              <li className="text-wrap">Format karya poster:</li>
              <ol
                className="list-disc pl-4"
                style={{ listStyleType: "lower-alpha" }}
              >
                <li>
                  Desain karya dibuat dalam digital dengan format jpg, jpeg,
                  atau PNG
                </li>
                <li>
                  Resolusi minimal 300 pixel atau inci dengan ukuran A4
                  (210x297mm)
                </li>
                <li>Posisi vertikal (portrait), color mode RGB</li>
                <li>
                  Tidak ada batasan jumlah kata yang digunakan dalam karya
                </li>
                <li>Karya dibuat dengan jumlah warna bebas</li>
                <li>Tonjolkan bagian-bagian yang dianggap paling penting</li>
                <li>
                  Karya dibuat dalam bahasa Indonesia yang baik dan benar sesuai
                  dengan ejaan yang disempurnakan (PUEBI) dan diperbolehkan
                  menggunakan singkatan yang menarik
                </li>
                <li>Isi sesuai dengan tema</li>
                <li>
                  Poster tidak diperbolehkan memuat suatu produk, memuat unsur
                  SARA, pornografi, atau gambar/tulisan yang
                  melecehkan/mengintimidasi suatu kaum/agama/bangsa tertentu
                </li>
                <li>
                  Pada poster wajib mencantumkan logo AIRCON, BEM Universitas
                  Airlangga, dan Universitas Airlangga yang dapat diunduh pada:
                </li>
                <div className="flex flex-col justify-center items-start w-[85%] gap-2">
                  <button
                    className="px-4 py-1 border border-black bg-white rounded-md m-1"
                    onClick={() =>
                      window.open("https://l1nk.dev/LOGOPOSTER", "_blank")
                    }
                  >
                    Logo Poster
                  </button>{" "}
                </div>
                <li>
                  Tidak diperbolehkan mencantumkan nama peserta, instansi, dan
                  logo asal instansi peserta
                </li>
              </ol>
            </ol>
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            Mekanisme Pendaftaran:
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Pendaftaran karya berlangsung dengan rincian sebagai berikut:
              </li>
              <ol
                className="list-disc pl-4"
                style={{ listStyleType: "lower-alpha" }}
              >
                <li>Gelombang I: 23 Desember 2024 - 4 Januari 2025</li>
                <li>Gelombang II: 5 - 18 Januari 2025</li>
              </ol>
              <li>
                Pengisian formulir melalui Website Airlangga Convention 2.0
              </li>
              <li className="text-wrap">
                Biaya pendaftaran peserta Lomba Poster AIRCON 2024 sebesar:
              </li>
              <ol
                className="list-disc pl-4"
                style={{ listStyleType: "lower-alpha" }}
              >
                <li>Gelombang I: Rp40.000</li>
                <li>Gelombang II: Rp50.000</li>
              </ol>
              <li>Biaya pendaftaran dibayarkan via transfer melalui:</li>
              <ol
                className="list-disc pl-4"
                style={{ listStyleType: "lower-alpha" }}
              >
                <li>BANK: MANDIRI: 1420021866396 A.N. ARIKA TRI WULANDARI</li>
              </ol>
              <li>
                Setiap peserta wajib melakukan konfirmasi dan mengirim bukti
                transfer dan tangkapan layar sudah mengirim form kepada
                https://wa.me/6281996716532 (Arika) dengan format “Konfirmasi
                Pendaftaran_Nama Lengkap Peserta_Asal Sekolah” paling lambat jam
                23.59 sesuai dengan ketentuan timeline yang tertera. Contoh:
                Konfirmasi Pendaftaran_Nama Lengkap_Asal Sekolah
              </li>
              <li>
                Karya diserahkan paling lambat 25 Januari 2025 pukul 23.59 WIB
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Click to Download Full Guide Book */}
      <div className="w-full flex flex-row justify-between items-center text-center mt-8 mb-2">
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
        <a
          href="https://drive.google.com/drive/folders/1NqIQwkzro_ga1eRvAiQqKyVlCbKIsZn9?usp=drive_link"
          className="w-1/3 text-sm font-bold underline animate-pulse"
        >
          Click to Download Full Guide Book
        </a>
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
      </div>
      {/* Pengumuman Top 10 Poster Infografis */}
      <div className="mx-10 mt-8 mb-2">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h1 className="font-winter text-xl w-3/4 text-wrap text-center">
            Pengumuman Top 10 Poster Infografis Aircon 2.0
          </h1>
          <p className="text-sm text-center">
            Selamat! kepada peserta yang lolos, selanjutnya akan memasuki{" "}
            <b>Tahap Presentasi Final</b>
          </p>
          <button
            className="py-2 px-4 rounded-lg text-sm bg-white shadow-lg"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1CIhPoAPkHljUjASKPUBmylqAsyIGz2gk?usp=sharing",
                "_blank"
              )
            }
          >
            Cek Di Sini
          </button>
          <p className="text-sm text-center">
            TTetap semangat untuk semua peserta! Bagi yang belum lolos, jangan
            berkecil hati. Kesempatan lain masih terbuka lebar! Airlangga 2.0
            #StriveforExcellence
          </p>
        </div>
      </div>
    </>
  );
};

export default Infografis;
