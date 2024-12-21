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
  const kartu_pelajar = formData.get("kartu_pelajar") as File;
  const abstrak_paper = formData.get("abstrak_paper") as File;

  const kartu_pelajar_buffer = Buffer.from(await kartu_pelajar.arrayBuffer());
  const abstrak_paper_buffer = Buffer.from(await abstrak_paper.arrayBuffer());

  const uploadDir = join(
    process.cwd(),
    "public",
    "uploads",
    "karya-tulis-ilmiah",
    "awal",
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
    await writeFile(`${uploadDir}/abstrak_paper.pdf`, abstrak_paper_buffer);

    // Save to database
    const result = await prisma.kTIAwal.create({
      data: {
        nama_tim,
        asal_sekolah,
        nomor_telepon,
        email,
        nama_anggota_1,
        nama_anggota_2,
        nama_anggota_3,
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
