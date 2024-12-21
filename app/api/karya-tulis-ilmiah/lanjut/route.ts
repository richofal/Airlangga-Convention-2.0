import { PrismaClient } from "@prisma/client";

import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const nama_tim = formData.get("nama_tim") as string;
  const asal_sekolah = formData.get("asal_sekolah") as string;
  const nomor_telepon = formData.get("nomor_telepon") as string;
  const email = formData.get("email") as string;
  const nama_anggota_1 = formData.get("nama_anggota_1") as string;
  const nama_anggota_2 = formData.get("nama_anggota_2") as string;
  const nama_anggota_3 = formData.get("nama_anggota_3") as string;
  const judul = formData.get("judul") as string;
  const subtema = formData.get("subtema") as string;
  const kartu_pelajar = formData.get("kartu_pelajar") as File;
  const full_paper = formData.get("full_paper") as File;
  const surat_pernyataan = formData.get("surat_pernyataan") as File;
  const surat_orisinalitas = formData.get("surat_orisinalitas") as File;

  const kartu_pelajar_buffer = Buffer.from(await kartu_pelajar.arrayBuffer());
  const full_paper_buffer = Buffer.from(await full_paper.arrayBuffer());
  const surat_pernyataan_buffer = Buffer.from(
    await surat_pernyataan.arrayBuffer()
  );
  const surat_orisinalitas_buffer = Buffer.from(
    await surat_orisinalitas.arrayBuffer()
  );

  const uploadDir = join(
    process.cwd(),
    "public",
    "uploads",
    "karya-tulis-ilmiah",
    "lanjut",
    nama_tim
  );

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      // This is for checking the directory is exist (ENOENT : Error No Entry)
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }
  }

  try {
    await writeFile(`${uploadDir}/kartu_pelajar.pdf`, kartu_pelajar_buffer);
    await writeFile(`${uploadDir}/full_paper.pdf`, full_paper_buffer);
    await writeFile(
      `${uploadDir}/surat_pernyataan_pendaftaran.pdf`,
      surat_pernyataan_buffer
    );
    await writeFile(
      `${uploadDir}/surat_pernyataan_orisinalitan.pdf`,
      surat_orisinalitas_buffer
    );

    // Save to database
    const result = await prisma.kTILanjut.create({
      data: {
        nama_tim,
        asal_sekolah,
        nomor_telepon,
        email,
        nama_anggota_1,
        nama_anggota_2,
        nama_anggota_3,
        judul,
        subtema,
      },
    });

    return NextResponse.json({ user: result });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
