import { PrismaClient } from "@prisma/client";

import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const id = formData.get("id") as string;
  const nama = formData.get("nama") as string;
  const asal_sekolah = formData.get("asal_sekolah") as string;
  const nomor_telepon = formData.get("nomor_telepon") as string;
  const email = formData.get("email") as string;
  const kartu_pelajar = formData.get("kartu_pelajar") as File;
  const file_infografis = formData.get("file_infografis") as File;

  const kartu_pelajar_buffer = Buffer.from(await kartu_pelajar.arrayBuffer());
  const file_infografis_buffer = Buffer.from(
    await file_infografis.arrayBuffer()
  );

  const uploadDir = join(
    process.cwd(),
    "public",
    "uploads",
    "infografis",
    "files",
    nama
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
    await writeFile(`${uploadDir}/${kartu_pelajar.name}`, kartu_pelajar_buffer);
    await writeFile(
      `${uploadDir}/${file_infografis.name}`,
      file_infografis_buffer
    );

    // Save to database
    const result = await prisma.infografis.create({
      data: {
        id,
        nama,
        asal_sekolah,
        nomor_telepon,
        email,
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
