import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  _request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  try {
    const tickets = await prisma.mL.findFirst({
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
