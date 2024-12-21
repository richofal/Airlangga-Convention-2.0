import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const tickets = await prisma.kTIAwal.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!tickets) {
      return NextResponse.json(
        { error: "Contestant not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(tickets);
  } catch (error) {
    console.error("Error fetching Contestant:", error);
    return NextResponse.json(
      { error: "Failed to fetch Contestant" },
      { status: 500 }
    );
  }
}
