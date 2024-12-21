import { z } from "zod";

export const ktiSchemaAwal = z.object({
  nama_tim: z.string().min(1, "Nama Tim harus diisi"),
  asal_sekolah: z.string().min(1, "Asal sekolah harus diisi"),
  nomor_telepon: z.string().min(1, "Nomor telepon harus diisi"),
  email: z.string().email("Email tidak valid"),
  nama_anggota_1: z.string().min(1, "Nama ketua harus diisi"),
  nama_anggota_2: z.string().optional(),
  nama_anggota_3: z.string().optional(),
  //   ktpFile: z.instanceof(File).refine((file) => file.size <= 5 * 1024 * 1024, {
  //     message: "File KTP harus kurang dari 5 MB",
  //   }).refine((file) => file.type === "application/pdf", {
  //     message: "File KTP harus berupa PDF",
  //   }),
  //   abstrakFile: z
  //     .instanceof(File)
  //     .refine((file) => file.size <= 10 * 1024 * 1024, {
  //       message: "File harus kurang dari 10 MB",
  //     })
  //     .refine((file) => file.type === "application/pdf", {
  //       message: "File harus berupa PDF",
  //     }),
});
