import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const nama = formData.get("nama") as string;
  const lomba = formData.get("lomba") as string;
  const bukti_pembayaran = formData.get("bukti_pembayaran") as File;

  const bukti_pembayaran_buffer = Buffer.from(
    await bukti_pembayaran.arrayBuffer()
  );

  const uploadDir = join(
    process.cwd(),
    "public",
    "uploads",
    lomba,
    "bukti_pembayaran",
    nama
  );

  try {
    await stat(uploadDir);
  } catch (e: unknown) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") {
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
      `${uploadDir}/${bukti_pembayaran.name}`,
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
