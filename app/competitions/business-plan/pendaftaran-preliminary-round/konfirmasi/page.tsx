"use client";
import React, { Suspense, useEffect, useState } from "react";
import BackButton from "@/app/components/BackButton";
import { BPPreliminary } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import { buktiSchema } from "@/app/utils/schema";

interface Files {
  name: string;
  file: File;
}

const ConfirmationPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState<BPPreliminary>();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [files, setFiles] = useState<Files[]>([]);
  const [fileValid, setFileValid] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    fetch(`/api/business-plan/preliminary/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [data]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();

    if (!data) return;

    formData.append("nama", data.nama_tim);
    formData.append("lomba", "business-plan");

    for (const key in data) {
      formData.append(key, data[key as keyof typeof data] as string);
    }

    files?.forEach((file) => {
      const validate = buktiSchema.safeParse(file.file);
      if (validate.success) {
        formData.append(file.name, file.file);
      } else {
        setFileValid(false);
        alert("Salah satu file tidak valid atau melebihi batas ukuran");
      }
    });
    if (fileValid) {
      fetch("/api/payment", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          router.push(
            `/competitions/karya-tulis-ilmiah/pendaftaran-tahap-lanjut/konfirmasi/reminder`
          );
        })
        .catch((error) => {
          console.error("Error Upload:", error);
        });
    }
  };

  return (
    <div className="mx-8 mt-5 lg:mx-28">
      <BackButton></BackButton>
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="w-full lg:w-1/2">
          <form
            action="post"
            className="mt-5 w-full flex flex-col gap-6"
            onSubmit={onSubmit}
          >
            <h1 className="text-2xl font-bold lg:text-4xl">
              Konfirmasi Pembayaran
            </h1>
            <div className="w-full flex flex-col gap-2 lg:text-xl">
              <div className="flex flex-row start items-center gap-6">
                <p className="flex flex-row justify-between items-center w-[38%]">
                  <span>Nama Tim</span> <span>:</span>
                </p>
                <p>{isLoading ? "Nama Lengkap" : data?.nama_tim}</p>
              </div>
              <div className="flex flex-row start items-center gap-6">
                <p className="flex flex-row justify-between items-center w-[38%]">
                  <span>Asal Sekolah:</span> <span>:</span>
                </p>
                <p>{isLoading ? "Asal Sekolah" : data?.asal_sekolah}</p>
              </div>
              <div className="flex flex-row start items-center gap-6">
                <p className="flex flex-row justify-between items-center w-[38%]">
                  <span>Cabang Lomba</span> <span>:</span>
                </p>
                <p>Business Plan</p>
              </div>
              <div className="flex flex-row start items-center gap-6">
                <p className="flex flex-row justify-between items-center w-[38%]">
                  <span>Harga</span> <span>:</span>
                </p>
                <p>Rp60.000,-</p>
              </div>
              {/* <div className="flex flex-row start items-center gap-6">
                <p className="flex flex-row justify-between items-center w-[38%]">
                  <span>Total</span> <span>:</span>
                </p>
                <p>Rp50.000,00</p>
              </div> */}
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="paymentMethod">Metode Pembayaran*</label>
                <select
                  name="paymentMethod"
                  id="paymentMethod"
                  className="w-2/3 px-2 py-2 rounded-lg border border-black"
                  defaultValue=""
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="" disabled>
                    -
                  </option>
                  <option value="BRI">BRI</option>
                </select>
              </div>
              {paymentMethod === "BRI" && (
                <div className="w-full flex flex-col items-start gap-2 mt-2">
                  <p>Nomor Rekening:</p>
                  <p className="text-xl font-bold">718501013632534</p>
                  <p>(KHUSNUNNAZILAH HANUM SALSABILA)</p>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col items-start lg:text-xl">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="bukti_pembayaran">
                  Bukti Pembayaran* <br /> Note: Format PDF/gambar (size limit
                  10 MB)
                </label>
                <input
                  id="bukti_pembayaran"
                  type="file"
                  name="bukti_pembayaran"
                  className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                  accept="image/*"
                  required
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFiles([
                        {
                          name: "bukti_pembayaran",
                          file: file,
                        },
                      ]);
                    }
                  }}
                />
              </div>
              <div className="flex flex-row justify-start items-center gap-3 mt-2">
                <input
                  id="confirmation"
                  name="confirmation"
                  required
                  type="checkbox"
                  className="lg:p-6 p-3"
                />
                <label
                  htmlFor="confirmation"
                  className="text-[0.8rem] lg:text-[1rem]"
                >
                  Saya memastikan data yang diisi benar, dan siap menerima
                  sanksi jika terdapat kesalahan
                </label>
              </div>
            </div>
            <button
              className="bg-black text-white px-5 py-2 rounded-lg flex flex-row justify-center items-center mt-0 w-1/4"
              type="submit"
            >
              DAFTAR
            </button>
          </form>
        </div>{" "}
        <div className="w-1/2 flex-row h-auto hidden lg:flex items-center justify-between">
          <div className="h-full px-[0.10rem] bg-black py-1 rounded-xl"></div>
          <div className="font-winter uppercase text-8xl">
            <h1
              className="text-[#D4ECF8]"
              style={{
                WebkitTextStroke: "1px #0A3981",
              }}
            >
              #<span className="text-[#F9C84D]">Strive</span>
            </h1>
            <h1
              className="text-[#E38F49]"
              style={{
                WebkitTextStroke: "1px #0A3981",
              }}
            >
              for
            </h1>
            <h1
              className="text-[#D4ECF8]"
              style={{
                WebkitTextStroke: "1px #0A3981",
              }}
            >
              Excellence
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense>
      <ConfirmationPage />
    </Suspense>
  );
}
