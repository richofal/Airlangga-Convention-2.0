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
  const email = formData.get("email") as string;
  const nama_anggota_1 = formData.get("nama_anggota_1") as string;
  const nomor_telepon_1 = formData.get("nomor_telepon_1") as string;
  const nama_anggota_2 = formData.get("nama_anggota_2") as string;
  const nomor_telepon_2 = formData.get("nomor_telepon_2") as string;
  const nama_anggota_3 = (formData.get("nama_anggota_3") as string) ?? null;
  const nomor_telepon_3 = (formData.get("nomor_telepon_3") as string) ?? null;
  const subtema = formData.get("subtema") as string;
  const kartu_pelajar = formData.get("kartu_pelajar") as File;
  const bukti_follow = formData.get("bukti_follow") as File;
  const bukti_poster = formData.get("bukti_poster") as File;
  const bmc = formData.get("bmc") as File;
  const surat_orisinalitas = formData.get("surat_orisinalitas") as File;

  const kartu_pelajar_buffer = Buffer.from(await kartu_pelajar.arrayBuffer());
  const bukti_follow_buffer = Buffer.from(await bukti_follow.arrayBuffer());
  const bukti_poster_buffer = Buffer.from(await bukti_poster.arrayBuffer());
  const bmc_buffer = Buffer.from(await bmc.arrayBuffer());
  const surat_orisinalitas_buffer = Buffer.from(
    await surat_orisinalitas.arrayBuffer()
  );

  const uploadDir = join(
    process.cwd(),
    "public",
    "uploads",
    "business-plan",
    "preliminary",
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
    await writeFile(`${uploadDir}/${kartu_pelajar.name}`, kartu_pelajar_buffer);
    await writeFile(`${uploadDir}/${bukti_follow.name}`, bukti_follow_buffer);
    await writeFile(`${uploadDir}/${bukti_poster.name}`, bukti_poster_buffer);
    await writeFile(`${uploadDir}/${bmc.name}`, bmc_buffer);
    await writeFile(
      `${uploadDir}/${surat_orisinalitas.name}`,
      surat_orisinalitas_buffer
    );

    // Save to database
    const result = await prisma.bPPreliminary.create({
      data: {
        id,
        nama_tim,
        asal_sekolah,
        email,
        nama_anggota_1,
        nomor_telepon_1,
        nama_anggota_2,
        nomor_telepon_2,
        nama_anggota_3,
        nomor_telepon_3,
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
