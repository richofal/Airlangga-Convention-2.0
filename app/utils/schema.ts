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

export const mlSchema = z.object({
  nama_tim: z.string().min(1, "Nama Tim harus diisi"),
  asal_sekolah: z.string().min(1, "Asal sekolah harus diisi"),
  nomor_telepon: z.string().min(1, "Nomor telepon harus diisi"),
  email: z.string().email("Email tidak valid"),
  nama_anggota_1: z.string().min(1, "Nama ketua harus diisi"),
  nickname_1: z.string().min(1, "Nickname ketua harus diisi"),
  nama_anggota_2: z.string().min(1, "Nama anggota 2 harus diisi"),
  nickname_2: z.string().min(1, "Nickname anggota 2 harus diisi"),
  nama_anggota_3: z.string().min(1, "Nama anggota 3 harus diisi"),
  nickname_3: z.string().min(1, "Nickname anggota 3 harus diisi"),
  nama_anggota_4: z.string().min(1, "Nama anggota 4 harus diisi"),
  nickname_4: z.string().min(1, "Nickname anggota 4 harus diisi"),
  nama_anggota_5: z.string().min(1, "Nama anggota 5 harus diisi"),
  nickname_5: z.string().min(1, "Nickname anggota 5 harus diisi"),
});

export const bPPreliminarySchema = z.object({
  nama_tim: z.string().min(1, "Nama Tim harus diisi"),
  asal_sekolah: z.string().min(1, "Asal sekolah harus diisi"),
  email: z.string().email("Email tidak valid"),
  nama_anggota_1: z.string().min(1, "Nama ketua harus diisi"),
  nomor_telepon_1: z.string().min(1, "Nomor telepon ketua harus diisi"),
  nama_anggota_2: z.string().min(1, "Nama anggota 2 harus diisi"),
  nomor_telepon_2: z.string().min(1, "Nomor telepon anggota 2 harus diisi"),
  nama_anggota_3: z.string().optional(),
  nomor_telepon_3: z.string().optional(),
  subtema: z.string().min(1, "Subtema harus diisi"),
});

export const basketSchema = z.object({
  nama_tim: z.string().min(1, "Nama Tim harus diisi"),
  asal_sekolah: z.string().min(1, "Asal sekolah harus diisi"),
  email: z.string().email("Email tidak valid"),
  nomor_telepon: z.string().min(1, "Nomor telepon harus diisi"),
  nama_perwakilan: z.string().min(1, "Nama ketua harus diisi"),
  jumlah_pemain: z.number().min(1, "Jumlah pemain harus diisi"),
  nama_pemain: z.array(z.string().min(1, "Nama pemain harus diisi")),
  nomor_punggung: z.array(z.string().min(1, "Nomor punggung harus diisi")),
  nama_coach: z.string().min(1, "Nama coach harus diisi"),
  nama_manager: z.string().min(1, "Nama manager harus diisi"),
  nama_official: z.string().min(1, "Nama official harus diisi"),
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

export const buktiSchema = z
  .instanceof(File)
  .refine((file) => /^image\/(jpeg|png|gif)$/.test(file.type), {
    message: "Dokumen invalid",
  })
  .refine((file) => file.size < 5 * 1024 * 1024, {
    message: "Ukuran dokumen harus kurang dari 5MB",
  });
