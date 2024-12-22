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
              <GameController size={35} className="text-black animate-pulse" />
            </div>
            <Image
              src="/ML.svg"
              width={200}
              height={200}
              alt="ML"
              className="absolute bottom-32 left-52 lg:left-80 lg:bottom-20 animate-bounce"
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
              {/* <div className="w-full flex flex-row justify-start items-center gap-2">
                <CalendarDots size={28} />
                <p className="text-sm">25 Desember 2024 - 25 Januari 2025</p>
              </div> */}
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <PhoneCall size={28} />
                <p className="text-sm">
                  <a
                    href="https://wa.me/6285141168633"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    CP: +62 851-4116-8633 (Daniel)
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
        {/* Waktu dan Tempat Perlombaan */}
        <div className="w-full flex flex-col mt-5 gap-1 lg:mt-10">
          <h1 className="text-2xl font-winter uppercase">
            Waktu dan Tempat Perlombaan:
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Technical Meeting: Dilaksanakan secara online pada Sabtu, 8
                Februari 2025
              </li>
              <li className="text-wrap">
                Lomba Onsite:
                <ol
                  className="list-decimal pl-5"
                  style={{ listStyleType: "lower-roman" }}
                >
                  <li>Babak Penyisihan: Sabtu, 15 Februari 2025</li>
                  <li>Babak Semifinal dan Final: Minggu, 16 Februari 2025</li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
        {/* Persayaratan Umum Peserta */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            Persyaratan Umum Peserta:
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              // style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Peserta merupakan siswa SMA/SMK aktif, dibuktikan dengan kartu
                pelajar yang wajib ditunjukkan saat registrasi
              </li>
              <li className="text-wrap">
                Peserta yang tidak terdaftar pada registrasi tidak diperbolehkan
                ikut serta dalam turnamen
              </li>
              <li className="text-wrap">
                Nama tim dan nickname tidak boleh mengandung unsur SARA,
                provokasi, atau hal yang melanggar norma
              </li>
              <li className="text-wrap">
                Peserta dilarang menggunakan alat bantu yang dapat memengaruhi
                keseimbangan pertandingan, seperti drone view atau alat ilegal
                lainnya
              </li>
              <li className="text-wrap">
                Setiap tim maksimal 6 peserta (5 pemain inti dan 1 pemain
                cadangan)
              </li>
              <li className="text-wrap">
                Seorang peserta hanya boleh terdaftar pada 1 akun/nickname dan 1
                tim
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
                Perwakilan tim melakukan pendaftaran dan pembayaran pada saat
                registrasi
              </li>
              <li>
                Formulir pendaftaran diisi melalui link pendaftaran dengan
                lengkap dan benar
              </li>
              <li>
                Nama Peserta 1 (ketua tim) akan dimasukkan ke grup peserta oleh
                panitia untuk menerima informasi terkait lomba/turnamen
              </li>
              <li>
                Username/nickname akun yang didaftarkan tidak boleh diubah
                setelah registrasi selesai
              </li>
              <li>
                Pada saat pertandingan, username yang digunakan harus sesuai
                dengan yang terdaftar. Username yang tidak sesuai akan
                menyebabkan diskualifikasi tim
              </li>
            </ol>
          </div>
        </div>
        {/* Sistem Pertandingan (Full Online) */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            Sistem Pertandingan (Full Online):
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              // style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Babak Penyisihan hingga Final:
                <ul className="list-disc pl-5">
                  <li>
                    Semua pertandingan, mulai dari babak penyisihan hingga
                    final, akan dilaksanakan secara offline
                  </li>
                  <li>
                    Babak Penyisihan akan dilaksanakan pada Hari 1, sementara 4
                    Besar hingga Final akan dilaksanakan pada Hari 2
                  </li>
                  <li>
                    Jadwal pertandingan akan diinformasikan lebih lanjut melalui
                    perwakilan tim oleh panitia.Sistem pertandingan menggunakan
                    mode custom room
                  </li>
                </ul>
              </li>
              <li className="text-wrap">
                Kehadiran Peserta:
                <ul className="list-disc pl-5">
                  <li>
                    Seluruh tim wajib hadir secara onsite sesuai dengan jadwal
                    yang telah ditentukan
                  </li>
                  <li>Batas keterlambatan adalah 15 menit</li>
                  <li>
                    Tim yang terlambat hadir hingga waktu yang ditentukan akan
                    didiskualifikasi
                  </li>
                  <li>
                    Tim yang anggotanya tidak lengkap hingga waktu pertandingan
                    dimulai tetap harus bermain dengan anggota yang tersedia
                    (seadanya) tanpa ada penundaan jadwal
                  </li>
                </ul>
              </li>
              <li>
                Sistem Pertandingan:
                <ul className="list-disc pl-5">
                  <li>
                    Pertandingan akan menggunakan mode custom room, dengan room
                    dibuat oleh panitia
                  </li>
                  <li>
                    Arahan akan diberikan oleh panitia sebelum pertandingan
                    dimulai
                  </li>
                  <li>
                    Sistem pertandingan:
                    <ul className="list-none">
                      <li>
                        - BO1 (Best of 1): Untuk semua pertandingan di babak
                        penyisihan
                      </li>
                      <li>
                        - BO3 (Best of 3): Untuk pertandingan di 4 Besar dan
                        Semifinal
                      </li>
                      <li>- BO5 (Best of 5): Untuk pertandingan Final</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Tangkapan Layar dan Laporan Hasil Pertandingan:
                <ul className="list-disc pl-5">
                  <li>
                    Setelah pertandingan selesai, panitia akan mendokumentasikan
                    hasil pertandingan secara langsung
                  </li>
                  <li>
                    Tim peserta tidak perlu mengunggah tangkapan layar ke grup
                    karena seluruh pengawasan dilakukan onsite oleh panitia
                  </li>
                </ul>
              </li>
              <li>
                Ketentuan Lain:
                <ul className="list-disc pl-5">
                  <li>
                    Tim wajib mematuhi semua arahan panitia selama pertandingan
                    berlangsung
                  </li>
                  <li>
                    Segala bentuk pelanggaran seperti keterlambatan atau
                    ketidakhadiran tim tanpa alasan yang jelas akan dikenakan
                    sanksi sesuai aturan yang berlaku
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            PERLENGKAPAN DAN PERATURAN PERTANDINGAN:
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Perlengkapan:
                <ul
                  className="list-none pl-5"
                  style={{ listStyleType: "lower-alpha" }}
                >
                  <li>
                    Pemain wajib memakai pakaian yang berlengan, celana panjang,
                    dan bersepatu selama pertandingan berlangsung
                  </li>
                  <li>
                    Tim diwajibkan membawa headset dan charger masing-masing
                  </li>
                  <li>
                    Tim dianjurkan membawa kabel ekstensi (kabel olor) untuk
                    kebutuhan daya
                  </li>
                </ul>
              </li>
              <li className="text-wrap">
                Peraturan:
                <ul
                  className="list-none pl-5"
                  style={{ listStyleType: "lower-alpha" }}
                >
                  <li>
                    Seluruh pertandingan hanya menggunakan perangkat HP
                    (smartphone). Penggunaan iPad atau tablet tidak
                    diperbolehkan
                  </li>
                  <li>
                    Cheat dan hack dalam bentuk apa pun tidak diperkenankan
                  </li>
                  <li>
                    Seluruh masalah terkait device pribadi menjadi tanggung
                    jawab masing-masing peserta, bukan panitia
                  </li>
                  <li>
                    Dilarang melakukan chat all selama pertandingan berlangsung
                  </li>
                  <li>Recall/taunting diperbolehkan</li>
                  <li>
                    Diperbolehkan berkomunikasi melalui discord, komunikasi
                    langsung, atau in-game chat team
                  </li>
                  <li>
                    Dilarang membuat keributan atau melakukan tindakan kekerasan
                    terhadap lawan maupun panitia
                  </li>
                  <li>
                    Dilarang berbicara toxic atau menggunakan perkataan yang
                    mengandung SARA
                  </li>
                  <li>
                    Jika terdapat kecurangan, peserta wajib melaporkannya kepada
                    panitia dengan menyertakan bukti kecurangan (screenshot)
                  </li>
                  <li>
                    Setiap tim diberikan kuota pause maksimal 3 kali per
                    pertandingan
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Click to Download Full Guide Book */}
      <div className="w-full flex flex-row justify-between items-center text-center mt-8 mb-2">
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
        <a
          href="https://drive.google.com/drive/folders/1NvbVhu5a2-MtYutROCxHTkXxi9fb2TD6?usp=drive_link"
          className="w-1/3 text-sm font-bold underline animate-pulse"
        >
          Click to Download Full Guide Book
        </a>
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
      </div>
    </>
  );
};

export default karyatulisilmiah;
