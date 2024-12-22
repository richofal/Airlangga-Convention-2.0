/*
  Warnings:

  - You are about to drop the `KTIAkhir` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "KTIAkhir";

-- CreateTable
CREATE TABLE "KTILanjut" (
    "id" TEXT NOT NULL,
    "nama_tim" TEXT NOT NULL,
    "asal_sekolah" TEXT NOT NULL,
    "nomor_telepon" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nama_anggota_1" TEXT NOT NULL,
    "nama_anggota_2" TEXT,
    "nama_anggota_3" TEXT,
    "judul" TEXT NOT NULL,
    "subtema" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KTILanjut_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KTILanjut_nama_tim_key" ON "KTILanjut"("nama_tim");
