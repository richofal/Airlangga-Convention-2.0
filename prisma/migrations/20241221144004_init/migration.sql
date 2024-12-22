-- CreateTable
CREATE TABLE "KTIAwal" (
    "id" TEXT NOT NULL,
    "nama_tim" TEXT NOT NULL,
    "asal_sekolah" TEXT NOT NULL,
    "nomor_telepon" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nama_anggota_1" TEXT NOT NULL,
    "nama_anggota_2" TEXT,
    "nama_anggota_3" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KTIAwal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KTIAkhir" (
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

    CONSTRAINT "KTIAkhir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Infografis" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "asal_sekolah" TEXT NOT NULL,
    "nomor_telepon" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Infografis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ML" (
    "id" TEXT NOT NULL,
    "nama_tim" TEXT NOT NULL,
    "asal_sekolah" TEXT NOT NULL,
    "nomor_telepon" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nama_anggota_1" TEXT NOT NULL,
    "nickname_1" TEXT NOT NULL,
    "nama_anggota_2" TEXT NOT NULL,
    "nickname_2" TEXT NOT NULL,
    "nama_anggota_3" TEXT NOT NULL,
    "nickname_3" TEXT NOT NULL,
    "nama_anggota_4" TEXT NOT NULL,
    "nickname_4" TEXT NOT NULL,
    "nama_anggota_5" TEXT NOT NULL,
    "nickname_5" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ML_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BPPreliminary" (
    "id" TEXT NOT NULL,
    "nama_tim" TEXT NOT NULL,
    "asal_sekolah" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nama_anggota_1" TEXT NOT NULL,
    "nomor_telepon_1" TEXT NOT NULL,
    "nama_anggota_2" TEXT NOT NULL,
    "nomor_telepon_2" TEXT NOT NULL,
    "nama_anggota_3" TEXT,
    "nomor_telepon_3" TEXT,
    "subtema" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BPPreliminary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BPSemifinal" (
    "id" TEXT NOT NULL,
    "nama_tim" TEXT NOT NULL,
    "asal_sekolah" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nama_anggota_1" TEXT NOT NULL,
    "nomor_telepon_1" TEXT NOT NULL,
    "subtema" TEXT NOT NULL,
    "judul_karya" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BPSemifinal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BPFinal" (
    "id" TEXT NOT NULL,
    "nama_tim" TEXT NOT NULL,
    "asal_sekolah" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nama_anggota_1" TEXT NOT NULL,
    "nomor_telepon_1" TEXT NOT NULL,
    "subtema" TEXT NOT NULL,
    "judul_karya" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BPFinal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Basket" (
    "id" TEXT NOT NULL,
    "nama_tim" TEXT NOT NULL,
    "asal_sekolah" TEXT NOT NULL,
    "nomor_telepon" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "jumlah_anggota" INTEGER NOT NULL,
    "nama_pemain" TEXT[],
    "nomor_punggung" TEXT[],
    "nama_coach" TEXT NOT NULL,
    "nama_manager" TEXT NOT NULL,
    "nama_official" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KTIAwal_nama_tim_key" ON "KTIAwal"("nama_tim");

-- CreateIndex
CREATE UNIQUE INDEX "KTIAkhir_nama_tim_key" ON "KTIAkhir"("nama_tim");

-- CreateIndex
CREATE UNIQUE INDEX "Infografis_nama_key" ON "Infografis"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "ML_nama_tim_key" ON "ML"("nama_tim");

-- CreateIndex
CREATE UNIQUE INDEX "BPPreliminary_nama_tim_key" ON "BPPreliminary"("nama_tim");

-- CreateIndex
CREATE UNIQUE INDEX "BPSemifinal_nama_tim_key" ON "BPSemifinal"("nama_tim");

-- CreateIndex
CREATE UNIQUE INDEX "BPFinal_nama_tim_key" ON "BPFinal"("nama_tim");

-- CreateIndex
CREATE UNIQUE INDEX "Basket_nama_tim_key" ON "Basket"("nama_tim");
