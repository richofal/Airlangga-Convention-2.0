"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import {
  GameController,
  CalendarDots,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";

const karyatulisilmiah = () => {
  const router = useRouter();

  return (
    <>
      <div className="mx-10 mt-5 lg:mx-28">
        <BackButton />
        {/* Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 lg:mt-3">
          <div className="flex flex-col justify-between items-start text-start gap-1 bg-[#1F519A] p-6 px-8 text-white rounded-xl relative overflow-clip w-full h-full mt-8 lg:col-span-1">
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <GameController size={35} className="text-black" />
            </div>
            <Image
              src="/ML.svg"
              width={200}
              height={200}
              alt="ML"
              className="absolute bottom-32 left-52 lg:left-80"
            ></Image>
            <h1 className="font-winter mt-5 text-2xl w-3/4 text-wrap lg:mt-1">
              Mobile Legends
            </h1>
            <div>
              <p className="lg:mt-1">Biaya Pendaftaran:</p>
              <p>Rp85.000,00 /tim</p>
            </div>
          </div>
          <div className="lg:w-full items-center lg:col-span-2">
            <h1 className="font-winter text-6 w-full text-4xl lg:mt-4">
              Lomba Mobile Legends
            </h1>
            <div className="w-full mt-5 flex flex-col gap-3">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <CalendarDots size={28} />
                <p className="text-sm">25 Desember 2024 - 25 Januari 2025</p>
              </div>
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <PhoneCall size={28} />
                <p className="text-sm">
                  <a
                    href="https://wa.me/6287855601664"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CP: +62 878-5560-1664 (Fandi)
                  </a>
                </p>
              </div>
            </div>
            {/* Tombol Daftar */}
            <button
              className="px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
              onClick={() =>
                router.push("/competitions/mobile-legends/pendaftaran")
              }
            >
              Daftar Sekarang
            </button>{" "}
          </div>
        </div>
        {/* Persayaratan Umum Peserta */}
        <div className="w-full flex flex-col mt-5 gap-1 lg:mt-10">
          <h1 className="text-2xl font-winter uppercase">
            Persayaratan Umum Peserta:
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              // style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Peserta merupakan siswa SMA/SMK aktif yang dibuktikan dengan
                kartu pelajar saat melakukan registrasi
              </li>
              <li className="text-wrap">
                Peserta yang tidak terdaftar pada registrasi, tidak boleh ikut
                serta
              </li>
              <li className="text-wrap">
                Dilarang menggunakan nama tim dan nickname yang mengandung SARA
              </li>
              <li className="text-wrap">
                Dilarang menggunakan alat bantu apapun (cheat, bug, gamepad,
                sarung jari, bedak, dan sejenisnya)
              </li>
              <li className="text-wrap">
                Setiap tim maksimal 6 peserta (5 pemain inti dan 1 pemain
                cadangan)
              </li>
              <li className="text-wrap">
                1 peserta hanya boleh mendaftarkan diri dengan 1 akun atau
                nickname dan hanya boleh bergabung dalam 1 tim
              </li>
              <li className="text-wrap">
                Keputusan panitia bersifat mutlak dan tidak dapat diganggu gugat
              </li>
            </ol>
          </div>
        </div>
        {/* Alur Pendaftaran */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">Alur Pendaftaran:</h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              // style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Perwakilan dari tim dapat melakukan pendaftaran dan pembayaran
                pada saat registrasi
              </li>
              <li>
                Perwakilan tim mengisi formulir pendaftaran pada link
                pendaftaran secara lengkap dan benar
              </li>
              <li>
                Nama peserta 1 merupakan ketua tim yang akan dimasukkan ke grup
                peserta oleh panitia
              </li>
              <li>
                Segala informasi terkait lomba / turnamen akan disampaikan
                kepada perwakilan tim melalui grup peserta
              </li>
              <li>
                Username/nickname akun yang telah didaftarkan tidak boleh diubah
              </li>
              <li>
                Pada saat permainan berlangsung, username yang digunakan harus
                sesuai dengan yang didaftarkan
              </li>
              <li>
                Username yang tidak sesuai dengan yang didaftarkan, akan di
                diskualifikasi
              </li>
            </ol>
          </div>
        </div>
        {/* SISTEM PERTANDINGAN (ONLINE) */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            SISTEM PERTANDINGAN (ONLINE):
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              // style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Babak penyisihan 64 tim akan dilakukan secara online
              </li>
              <li className="text-wrap">
                Jadwal pertandingan akan diinfokan lebih lanjut melalui grup
                peserta (WhatsApp)
              </li>
              <li>
                Peserta wajib mengunggah tangkapan layar lobby ke grup
                masing-masing
              </li>
              <li>
                After match, peserta wajib mengunggah tangkapan layar hasil
                tanding ke grup masing-masing maksimal 10 menit setelah
                pertandingan berakhir
              </li>
              <li>
                Batas keterlambatan 15 menit. Bagi tim yang terlambat join atau
                anggotanya tidak lengkap akan di diskualifikasi
              </li>
              <li>Sistem yang digunakan adalah sistem gugur</li>
              <li>Sistem pertandingan menggunakan mode custom room</li>
              <li>
                Tiap tim membuat custom room sendiri dan langsung memulai
                pertandingan apabila sudah diberikan arahan oleh panitia
              </li>
              <li>
                Sistem pertandingan yang digunakan adalah BO (best of) untuk
                babak penyisihan
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            SISTEM PERTANDINGAN (ONSITE):
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              // style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Tim yang termasuk dalam penyisihan semifinal sampai final harus
                hadir secara onsite
              </li>
              <li className="text-wrap">
                Jadwal pertandingan akan diinfokan lebih lanjut melalui
                perwakilan tim
              </li>
              <li>Peserta harus hadir sesuai jadwal</li>
              <li>
                Batas keterlambatan 15 menit. Bagi tim yang terlambat atau
                anggotanya tidak lengkap akan di diskualifikasi
              </li>
              <li>
                Sistem pertandingan menggunakan mode custom room. Room akan
                dibuat oleh panitia
              </li>
              <li>
                Sistem pertandingan yang digunakan adalah BO (best of) untuk
                babak penyisihan
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            PERLENGKAPAN DAN PERATURAN PERTANDINGAN:
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              // style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Pemain diwajibkan memakai pakaian yang berlengan dan celana
                panjang, serta bersepatu
              </li>
              <li className="text-wrap">
                Setiap tim diwajibkan membawa headset serta charger sendiri
              </li>
              <li>Setiap tim dianjurkan untuk membawa kabel olor sendiril</li>
              <li>
                Pada saat lomba babak penyisihan, semifinal dan final, peserta
                hanya boleh menggunakan HP. Tidak diperbolehkan menggunakan ipad
                ataupun tablet
              </li>
              <li>Segala bentuk cheat dan hack tidak diperkenankan</li>
              <li>
                Lag, gangguan sinyal atau masalah baterai maupun gadget, serta
                seluruh bentuk error yang terjadi merupakan tanggung jawab
                masing-masing tim
              </li>
              <li>Dilarang untuk chat all, hanya boleh emote</li>
              <li>Diperbolehkan recall/taunting</li>
              <li>
                Diperbolehkan menggunakan discord, komunikasi langsung dan
                komunikasi in game
              </li>
              <li>Dilarang membuat keributan</li>
              <li>Dilarang menggunakan kekerasan</li>
              <li>Dilarang berbicara toxic maupun yang mengandung SARA</li>
              <li>
                Jika ada terdapat kecurangan dapat di screenshot dan dilaporkan
                pada panitia
              </li>
              <li>Apapun yang terjadi, tidak boleh melakukan pause</li>
            </ol>
          </div>
        </div>
      </div>
      {/* Click to Download Full Guide Book */}
      <div className="w-full flex flex-row justify-between items-center text-center mt-8 mb-2">
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
        <a
          href="https://drive.google.com/drive/folders/1NvbVhu5a2-MtYutROCxHTkXxi9fb2TD6?usp=drive_link"
          className="w-1/3 text-sm font-bold"
        >
          Click to Download Full Guide Book
        </a>
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
      </div>
    </>
  );
};

export default karyatulisilmiah;
