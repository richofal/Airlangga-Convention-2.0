import { z } from "zod";

export const ktiSchemaAwal = z.object({
  nama_tim: z.string().min(1, "Nama Tim harus diisi"),
  asal_sekolah: z.string().min(1, "Asal sekolah harus diisi"),
  nomor_telepon: z.string().min(1, "Nomor telepon harus diisi"),
  email: z.string().email("Email tidak valid"),
  nama_anggota_1: z.string().min(1, "Nama ketua harus diisi"),
  nama_anggota_2: z.string().optional(),
  nama_anggota_3: z.string().optional(),
});

export const ktiSchemaAkhir = z.object({
  nama_tim: z.string().min(1, "Nama Tim harus diisi"),
  asal_sekolah: z.string().min(1, "Asal sekolah harus diisi"),
  nomor_telepon: z.string().min(1, "Nomor telepon harus diisi"),
  email: z.string().email("Email tidak valid"),
  nama_anggota_1: z.string().min(1, "Nama ketua harus diisi"),
  nama_anggota_2: z.string().optional(),
  nama_anggota_3: z.string().optional(),
  judul: z.string().min(1, "Judul harus diisi"),
  subtema: z.string().min(1, "Subtema harus diisi"),
});

export const infografisSchema = z.object({
  nama: z.string().min(1, "Nama Tim harus diisi"),
  asal_sekolah: z.string().min(1, "Asal sekolah harus diisi"),
  nomor_telepon: z.string().min(1, "Nomor telepon harus diisi"),
  email: z.string().email("Email tidak valid"),
});

export const documentSchema5 = z
  .instanceof(File)
  .refine((file) => file.type == "application/pdf", {
    message: "Dokumen invalid",
  })
  .refine((file) => file.size < 5 * 1024 * 1024, {
    message: "Ukuran dokumen harus kurang dari 5MB",
  });

export const documentSchema10 = z
  .instanceof(File)
  .refine((file) => file.type == "application/pdf", {
    message: "Dokumen invalid",
  })
  .refine((file) => file.size < 10 * 1024 * 1024, {
    message: "Ukuran dokumen harus kurang dari 10MB",
  });
