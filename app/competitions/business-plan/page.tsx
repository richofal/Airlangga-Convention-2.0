"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import {
  Presentation,
  CalendarDots,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";

const BusinessPlan = () => {
  const router = useRouter();

  return (
    <>
      <div className="mx-10 mt-5 lg:mx-28">
        <BackButton />
        {/* Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 lg:mt-3">
          <div className="flex flex-col justify-between items-start text-start gap-1 bg-[#1F519A] p-6 px-8 text-white rounded-xl relative overflow-clip w-full h-full mt-8 lg:col-span-1">
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <Presentation size={35} className="text-black animate-pulse" />
            </div>
            <Image
              src="/Businessplan.svg"
              width={200}
              height={200}
              alt=""
              className="absolute bottom-48 left-40 lg:left-72 lg:bottom-40 animate-pulse"
            ></Image>
            <h1 className="font-winter mt-5 text-2xl w-3/4 text-wrap lg:mt-1">
              Business Plan
            </h1>
            <div>
              <p className="lg:mt-1">Biaya Pendaftaran:</p>
              <p>
                Rp50.000,- /tim (Early Bird) <br />
                Rp60.000,- /tim (Batch 1) <br />
                Rp75.000,- /tim (Batch 2)
              </p>
            </div>
          </div>
          <div className="lg:w-full items-center lg:col-span-2">
            <h1 className="font-winter text-6 w-full text-4xl lg:mt-4">
              Lomba Business Plan
            </h1>
            <div className="w-full mt-5 flex flex-col gap-3">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <CalendarDots size={28} />
                <p className="text-sm">23 Desember 2024 - 22 Februari 2025</p>
              </div>
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <PhoneCall size={28} />
                <p className="text-sm">
                  <a
                    href="https://wa.me/6282133335529"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    CP: +62 821-3333-5529 (Salman)
                  </a>
                  {""} <br /> {""}
                  <a
                    href="https://wa.me/6282234923689"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    CP: +62 822-3492-3689 (Marsha)
                  </a>
                </p>
              </div>
            </div>
            {/* Tombol Daftar */}
            <button
              className="hidden px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
              onClick={() =>
                router.push(
                  "#"
                  // "/competitions/business-plan/pendaftaran-preliminary-round"
                )
              }
            >
              Ditutup
              {/* Daftar Preliminary Round */}
            </button>{" "}
            <br />
            <button
              className="px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
              onClick={() =>
                router.push("/competitions/business-plan/pendaftaran-semifinal")
              }
            >
              Daftar Semifinal
            </button>{" "}
            <br />
            <button
              className=" hidden px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
              onClick={() =>
                router.push("/competitions/business-plan/pendaftaran-final")
              }
            >
              Daftar Final
            </button>{" "}
          </div>
        </div>
        {/* Tema */}
        <div className="flex flex-col lg:flex-row mt-5 gap-5 lg:mt-10">
          <div className="w-full lg:w-1/2">
            <h1 className="font-winter text-2xl uppercase">Tema</h1>
            <p>
              “{/* */}
              <i>
                Innovative Business Solutions for ESG Excellence: Empowering
                Sustainability and Impact to Support Indonesia&apos;s Golden
                Vision 2045
              </i>
              {/* */}”
            </p>
          </div>
          {/* Sub Tema */}
          <div className="w-full">
            <h1 className="font-winter uppercase text-2xl">sub-tema</h1>
            <div className="w-full flex flex-row justify-between lg:justify-start lg:gap-5">
              <div>
                <ol className="list-decimal ml-4">
                  <li>Pendidikan</li>
                  <li>Kesehatan</li>
                  <li>Teknologi</li>
                  <li>Lingkungan</li>
                  <li>FnB</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* Ketentuan Peserta */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">Ketentuan Peserta:</h1>
          <div className="flex flex-col w-full gap-1">
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Peserta merupakan Warga Negara Indonesia
              </li>
              <li className="text-wrap">
                Peserta <i>Aircon Business Plan Competition 2.0</i> merupakan
                pelajar aktif dari SMA/MA/SMK Sederajat Negeri maupun Swasta
                yang terhitung pada saat pengumpulan Proposal
              </li>
              <li className="text-wrap">
                Setiap tim terdiri dari minimal dua (2) peserta dan maksimal
                tiga (3) peserta
              </li>
              <li className="text-wrap">
                Peserta diperkenankan berasal dari angkatan atau tingkat yang
                berbeda
              </li>
              <li className="text-wrap">
                Peserta tidak diperkenankan mewakili dua tim atau lebih
              </li>
              <li className="text-wrap">
                Peserta yang telah didaftarkan di suatu tim tidak dapat
                digantikan hingga <i>Aircon Business Plan Competition 2.0</i>{" "}
                selesai
              </li>
            </ol>
          </div>
        </div>
        {/* Ketentuan Lomba */}
        <div className="w-full flex flex-col mt-5 gap-1 lg:mt-10">
          <h1 className="text-2xl font-winter uppercase">Ketentuan Lomba:</h1>
          <div className="flex flex-col w-full gap-1">
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap w-full break-words">
                Setiap tim hanya diperbolehkan memilih 1 subtema dari 5 pilihan
                subtema yang ada (Pendidikan/Kesehatan/Teknologi/Lingkungan/FnB)
              </li>
              <li className="text-wrap">
                Setiap tim hanya diperbolehkan mengumpulkan 1 karya
              </li>
              <li className="text-wrap">
                Ide merupakan karya sendiri (orisinil) dan belum pernah
                diikutkan dalam kompetisi manapun
              </li>
              <li className="text-wrap">
                Lomba dilaksanakan secara daring untuk tahap BMC dan Proposal,
                sedangkan untuk tahap final (<i>pitching</i>) dilakukan secara
                luring
              </li>
              <li>
                Setiap tim wajib mengikuti seluruh rangkaian lomba, mulai dari
                tahap BMC hingga final (<i>pitching</i>) sesuai dengan timeline
                yang telah ditentukan
              </li>
              <li>
                Keputusan juri bersifat mutlak dan tidak dapat diganggu gugat
              </li>
            </ol>
          </div>
        </div>
        {/* Ketentuan Pendaftaran Peserta */}
        <div className="w-full flex flex-col mt-5 gap-1 lg:mt-10 text-wrap">
          <h1 className="text-2xl font-winter uppercase">
            Ketentuan Pendaftaran Peserta
          </h1>
          <div className="flex flex-col w-full gap-1 text-wrap">
            <ol className="list-decimal pl-5 flex flex-col gap-1 text-wrap">
              <li className="text-wrap">
                <b>Preliminary Round: Business Model Canvas (BMC)</b>
                <ul
                  className="list-alpha pl-4"
                  style={{ listStyleType: "upper-alpha" }}
                >
                  <li>
                    Pada tahap ini peserta diminta untuk mengirimkan Business
                    Model Canvas (BMC) dari ide yang dilombakan. BMC yang
                    diajukan oleh peserta dikumpulkan dalam bentuk softcopy
                    (PDF) dengan batas pengumpulan <b>15 Januari 2025</b>
                  </li>
                  <li>
                    Pada tahap ini, akan dipilih BMC terbaik dengan jumlah yang
                    ditentukan oleh panitia untuk mengikuti tahap selanjutnya,
                    yaitu seleksi proposal bisnis
                  </li>
                  <li>
                    Peserta yang lolos pada tahap ini akan diumumkan melalui
                    Instagram <b>@airlanggaconvention</b> dan Grup Whatsapp
                    peserta pada tanggal <b>19 Januari 2025</b>
                  </li>
                  <li>
                    Adapun tata cara dan persyaratan pada tahap ini adalah
                    sebagai berikut:
                    <ul
                      className="list-alpha pl-4"
                      style={{ listStyleType: "lower-alpha" }}
                    >
                      <li>
                        Setiap peserta diwajibkan <i>follow</i> akun Instagram
                        dan TikTok <b>@airlanggaconvention</b>
                      </li>
                      <li>
                        Setiap peserta diwajibkan untuk share poster Lomba
                        Business Plan Airlangga Convention 2.0 minimal pada 3
                        grup Whatsapp dan Instagram Story masing-masing (ketua
                        dan anggota) yang dapat diunduh pada link berikut ini:{" "}
                        <br />
                        <a
                          href="https://bit.ly/FolderAircon_BusinessPlan"
                          className="underline"
                        >
                          Klik Di Sini
                        </a>
                      </li>
                      <li>
                        Setiap peserta wajib scan Kartu Pelajar/Surat Keterangan
                        Pelajar Aktif dari pihak sekolah (ketua dan anggota)
                      </li>
                      <li>
                        Setiap peserta wajib mengisi lembar orisinalitas karya
                        yang dapat diunduh pada link berikut ini: <br />
                        <a
                          href="https://bit.ly/LembarOrsinalitasBusinessPlanAIRCON"
                          className="underline"
                        >
                          Klik Di Sini
                        </a>
                      </li>
                      <li>
                        Peserta melakukan pembayaran biaya registrasi sesuai
                        dengan batch pengumpulan BMC. Berikut rincian batch
                        pengumpulan BMC beserta biayanya:
                        <ol className="list-disc pl-4 text-wrap break-words">
                          <li>
                            Early Bird <b>(Tanggal 23 - 27 Desember 2024)</b> :
                            Rp 50.000,- (per tim)
                          </li>
                          <li>
                            BATCH 1{" "}
                            <b>(Tanggal 28 Desember 2024 - 3 Januari 2025)</b>:
                            Rp 60.000,- (per tim)
                          </li>
                          <li>
                            BATCH 2 <b>(Tanggal 4 - 15 Januari 2025)</b> : Rp
                            75.000,- (per tim)
                          </li>
                        </ol>
                        <ol>
                          <li>
                            Biaya pendaftaran dapat dikirimkan ke nomor rekening{" "}
                            {""}
                            <b>
                              BRI 718501013632534 A/N KHUSNUNNAZILAH HANUM
                              SALSABILA
                            </b>
                          </li>
                        </ol>
                      </li>
                      <li>
                        Masing-masing persyaratan pada <b>poin a sampai e </b>
                        dibuktikan melalui screenshot atau scan yang diunggah
                        pada formulir pendaftaran dengan format PDF. Adapun
                        ketentuan nama file adalah sebagai berikut:
                        <ol className="list-disc pl-4">
                          <li>
                            Bukti follow akun Instagram dan TikTok :{" "}
                            <b>Nama Tim_Follow IG dan TikTok_AIRCON</b>
                          </li>
                          <li>
                            Bukti <i>share</i> poster :{" "}
                            <b>Nama Tim_Share Poster_AIRCON</b>
                          </li>
                          <li>
                            Scan Kartu Pelajar/Surat Keterangan Pelajar Aktif
                            dari pihak sekolah :{" "}
                            <b>Nama Tim_Kartu Pelajar_AIRCON</b>
                          </li>
                          <li>
                            Scan Lembar Orisinalitas Karya :{" "}
                            <b>Nama Tim_Lembar Orisinalitas Karya_AIRCON</b>
                          </li>
                          <li>
                            Bukti pembayaran :{" "}
                            <b>Nama Tim_Bukti Pembayaran_AIRCON</b>
                          </li>
                          <li>
                            File BMC : <b>Nama Tim_BMC_Judul_AIRCON</b>
                          </li>
                        </ol>
                      </li>
                      <li>
                        Peserta yang telah melakukan pendaftaran dan pembayaran
                        wajib melakukan konfirmasi kepada panitia melalui nomor
                        WhatsApp 0821-3333-5529 a.n Salman maksimal 1x24 jam.
                        Peserta melakukan konfirmasi dalam bentuk{" "}
                        <i>screenshot </i>
                        bukti submit formulir pendaftaran dan scan bukti
                        pembayaran serta menulis keterangan dengan ketentuan:
                        <ol className="list-disc pl-4">
                          <li>
                            <b>
                              Nama Tim_BMC dan Bukti Pembayaran_Subtema_Judul
                              Bisnis_Nama Ketua
                            </b>
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Keputusan hasil penilaian juri bersifat mutlak dan tidak
                    dapat diganggu gugat
                  </li>
                </ul>
              </li>
              <br />
              <li className="text-wrap">
                <b>Semifinal: Proposal</b>
                <ul
                  className="list-alpha pl-4 text-wrap break-words"
                  style={{ listStyleType: "upper-alpha" }}
                >
                  <li>
                    Pada tahap ini peserta diminta untuk mengirimkan proposal
                    bisnis. Tim yang melakukan pengumpulan proposal adalah tim
                    yang telah dinyatakan lolos tahap BMC, pengumpulan proposal
                    dilakukan oleh perwakilan tim
                  </li>
                  <li>
                    Proposal bisnis dikumpulkan dalam bentuk <i>softcopy</i>{" "}
                    melalui website Aircon 2.0
                  </li>
                  <li>
                    Proposal bisnis dikumpulkan dengan format PDF dengan
                    ketentuan penamaan file sebagai berikut :{" "}
                    <b>
                      Nama Tim_Proposal Bisnis_Subtema_Judul Bisnis_Nama Ketua
                      Tim
                    </b>{" "}
                    (Contoh : Tim A_Proposal Bisnis_Halal Food_Kerupuk Kekinian
                    dari Tepung Jagung_Abdul Sujiwo)
                  </li>
                  <li>
                    Peserta yang telah mengumpulkan karya wajib melakukan
                    konfirmasi kepada panitia melalui nomor Whatsapp
                    0821-3333-5529 a.n Salman maksimal 1x24 jam. Peserta
                    melakukan konfirmasi dalam bentuk screenshot bukti submit
                    formulir pengumpulan serta menulis keterangan dengan
                    ketentuan:{" "}
                    <b>
                      Nama Tim_Proposal Bisnis_Subtema_Judul Bisnis_Nama Ketua
                    </b>
                  </li>
                  <li>
                    Pada tahap ini akan dipilih 10 proposal bisnis terbaik untuk
                    melaju ke tahap final. Pengumuman terkait 10 tim terbaik
                    yang akan menuju tahap final akan diumumkan pada tanggal{" "}
                    <b>10 Februari 2025</b> melalui Grup Whatsapp peserta dan
                    akun Instagram <b>@airlanggaconvention</b>
                  </li>
                  <li>
                    Adapun ketentuan mengenai penulisan proposal bisnis sebagai
                    berikut:
                    <ol className="list-disc pl-4">
                      <li>
                        Naskah proposal berisikan 25 halaman tidak termasuk
                        cover, lembar orisinalitas karya, ringkasan eksekutif,
                        daftar isi, dan lampiran
                      </li>
                      <li>
                        Penulisan proposal menggunakan bahasa Indonesia yang
                        sesuai dengan Pedoman Umum Ejaan Bahasa Indonesia
                        (PUEBI) dan Kamus Besar Bahasa Indonesia (KBBI)
                      </li>
                      <li>
                        Proposal diketik rapi dengan font Times New Roman ukuran
                        12, dengan spasi 1,5 kertas A4. Margin kiri 4 cm, margin
                        kanan, atas, dan bawah 3 cm
                      </li>
                      <li>
                        Desain cover dan proposal dapat dibuat sekreatif mungkin
                      </li>
                      <li>
                        Sistematika penulisan proposal secara rinci dapat
                        dilihat pada{/* */}
                        <b> Lampiran 2</b>
                      </li>
                    </ol>
                  </li>
                  <li>
                    Ketentuan panitia dan keputusan dewan juri bersifat MUTLAK
                    dan tidak dapat diganggu gugat
                  </li>
                </ul>
              </li>
              <br />
              <li className="text-wrap">
                <b>Final: Pitching</b>
                <ul
                  className="list-alpha pl-4 text-wrap break-words"
                  style={{ listStyleType: "upper-alpha" }}
                >
                  <li>
                    Tahap ini diikuti oleh <b>10 (sepuluh) tim</b> terbaik yang
                    telah dinyatakan lolos pada tahap proposa
                  </li>
                  <li>
                    Tim yang telah dinyatakan lolos babak final <b>wajib</b>{" "}
                    mengikuti{" "}
                    <b>
                      <i>Technical Meeting</i>
                    </b>{" "}
                    pada 11 Februari 2025
                  </li>
                  <li>
                    Pada tahap ini, sepuluh tim terbaik akan melakukan pitching
                    terkait ide bisnisnya di hadapan dewan juri
                  </li>
                  <li>
                    Seluruh peserta yang telah dinyatakan lolos <b>wajib</b>{" "}
                    mengikuti babak final sesuai dengan anggota tim yang telah
                    didaftarkan, apabila terdapat anggota tim yang berhalangan
                    hadir maka tidak dapat digantikan
                  </li>
                  <li>
                    Babak final akan dilaksanakan secara{" "}
                    <b>
                      <i>Luring</i>
                    </b>{" "}
                    dan bertempat di Universitas Airlangga, Surabaya
                  </li>
                  <li>
                    Pada tahap ini peserta diminta untuk mengumpulkan{" "}
                    <i>pitch deck </i>
                    {/* */}
                    dalam bentuk <i>power point</i>
                  </li>
                  <li>
                    Ketentuan mengenai tahap final akan disampaikan lebih rinci
                    pada saat <i>technical meeting</i> yang akan dilaksanakan
                    pada 11 Februari 2025
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
          href="https://drive.google.com/drive/folders/1Sag9w3kr-2g69IB4etkaThmu5nxePqcI?usp=sharing"
          className="w-1/3 text-sm font-bold underline"
        >
          Click to Download Full Guide Book
        </a>
        <div className="w-1/3 py-[0.05rem] bg-black lg:w-full"></div>
      </div>
      {/* Pengumuman */}
      <div className="mx-10 mt-8 mb-2">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <p className="text-sm text-center">
            SEGALA INFORMASI AKAN DISAMPAIKAN MELALUI INSTAGRAM
            @airlanggaconvention dan Grup Whatsapp Peserta
          </p>
        </div>
      </div>
    </>
  );
};

export default BusinessPlan;
