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
  const nama_perwakilan = formData.get("nama_perwakilan") as string;
  const jumlah_anggota = Number(formData.get("jumlah_anggota"));
  const nama_pemain = formData.getAll("nama_pemain") as string[];
  const nomor_punggung = formData.getAll("nomor_punggung") as string[];
  const nama_coach = formData.get("nama_coach") as string;
  const nama_manager = formData.get("nama_manager") as string;
  const nama_official = formData.get("nama_official") as string;
  const kartu_pelajar = formData.get("kartu_pelajar") as File;
  const kartu_official = formData.get("kartu_official") as File;
  const bukti_poster = formData.get("bukti_poster") as File;

  const kartu_pelajar_buffer = Buffer.from(await kartu_pelajar.arrayBuffer());
  const kartu_official_buffer = Buffer.from(await kartu_official.arrayBuffer());
  const bukti_poster_buffer = Buffer.from(await bukti_poster.arrayBuffer());

  console.log({
    id,
    nama_tim,
    asal_sekolah,
    nomor_telepon,
    email,
    nama_perwakilan,
    jumlah_anggota,
    nama_pemain,
    nomor_punggung,
    nama_coach,
    nama_manager,
    nama_official,
  });

  const uploadDir = join(
    process.cwd(),
    "public",
    "uploads",
    "basket",
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
    await writeFile(
      `${uploadDir}/${kartu_official.name}`,
      kartu_official_buffer
    );
    await writeFile(`${uploadDir}/${bukti_poster.name}`, bukti_poster_buffer);

    // Save to database
    const result = await prisma.basket.create({
      data: {
        id,
        nama_tim,
        asal_sekolah,
        nomor_telepon,
        email,
        nama_perwakilan,
        jumlah_anggota,
        nama_pemain,
        nomor_punggung,
        nama_coach,
        nama_manager,
        nama_official,
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
