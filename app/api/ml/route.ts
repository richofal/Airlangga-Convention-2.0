import { PrismaClient } from "@prisma/client";

import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const id = formData.get("id") as string;
  const nama_tim = formData.get("nama_tim") as string;
  const asal_sekolah = formData.get("asal_sekolah") as string;
  const nomor_telepon = formData.get("nomor_telepon") as string;
  const email = formData.get("email") as string;
  const nama_anggota_1 = formData.get("nama_anggota_1") as string;
  const nickname_1 = formData.get("nickname_1") as string;
  const nama_anggota_2 = formData.get("nama_anggota_2") as string;
  const nickname_2 = formData.get("nickname_2") as string;
  const nama_anggota_3 = formData.get("nama_anggota_3") as string;
  const nickname_3 = formData.get("nickname_3") as string;
  const nama_anggota_4 = formData.get("nama_anggota_4") as string;
  const nickname_4 = formData.get("nickname_4") as string;
  const nama_anggota_5 = formData.get("nama_anggota_5") as string;
  const nickname_5 = formData.get("nickname_5") as string;
  const nama_anggota_6 = formData.get("nama_anggota_6") as string;
  const nickname_6 = formData.get("nickname_6") as string;
  const kartu_pelajar = formData.get("kartu_pelajar") as File;

  const kartu_pelajar_buffer = Buffer.from(await kartu_pelajar.arrayBuffer());

  const uploadDir = join(
    process.cwd(),
    "public",
    "uploads",
    "mobile-legends",
    "files",
    nama_tim
  );

  try {
    await stat(uploadDir);
  } catch (e: NodeJS.ErrnoException) {
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
    await writeFile(`${uploadDir}/${kartu_pelajar.name}`, kartu_pelajar_buffer);

    // Save to database
    const result = await prisma.mL.create({
      data: {
        id,
        nama_tim,
        asal_sekolah,
        nomor_telepon,
        email,
        nama_anggota_1,
        nickname_1,
        nama_anggota_2,
        nickname_2,
        nama_anggota_3,
        nickname_3,
        nama_anggota_4,
        nickname_4,
        nama_anggota_5,
        nickname_5,
        nama_anggota_6,
        nickname_6,
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
