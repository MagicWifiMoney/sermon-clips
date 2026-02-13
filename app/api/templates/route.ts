import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/templates — list user's processing templates
export async function GET() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const templates = await prisma.processingTemplate.findMany({
    where: { userId: user.id },
    orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
  });

  return NextResponse.json({ data: templates });
}

// POST /api/templates — create a processing template
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { name, description, isDefault, processingOptions, publishMode } = await request.json();

  if (!name || !processingOptions) {
    return NextResponse.json({ error: "name and processingOptions required" }, { status: 400 });
  }

  // If setting as default, unset current defaults
  if (isDefault) {
    await prisma.processingTemplate.updateMany({
      where: { userId: user.id, isDefault: true },
      data: { isDefault: false },
    });
  }

  const template = await prisma.processingTemplate.create({
    data: {
      userId: user.id,
      name,
      description,
      isDefault: isDefault ?? false,
      processingOptions,
      publishMode: publishMode ?? "review",
    },
  });

  return NextResponse.json({ data: template }, { status: 201 });
}
