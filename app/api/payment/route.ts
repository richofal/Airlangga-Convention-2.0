import { PrismaClient } from "@prisma/client";

import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const nama = formData.get("nama") as string;
  const lomba = formData.get("lomba") as string;
  const bukti_pembayaran = formData.get("bukti_pembayaran") as File;

  const bukti_pembayaran_buffer = Buffer.from(
    await bukti_pembayaran.arrayBuffer()
  );

  const uploadDir = join(process.cwd(), "public", "uploads", lomba, nama);

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
    await writeFile(
      `${uploadDir}/bukti_pembayaran.jpg`,
      bukti_pembayaran_buffer
    );

    return NextResponse.json({ message: "File uploaded successfully." });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
