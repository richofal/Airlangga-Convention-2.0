import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const {
      nama_tim,
      asal_sekolah,
      nomor_telepon,
      email,
      nama_anggota_1,
      nama_anggota_2,
      nama_anggota_3,
    } = await request.json();

    const user = await prisma.kTIAwal.create({
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

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error adding KTIAwal:", error);
    return NextResponse.json(
      { error: "Failed to add KTIAwal" },
      { status: 500 }
    );
  }
}
