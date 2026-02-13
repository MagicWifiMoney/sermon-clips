import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET /api/templates/[id]
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const template = await prisma.processingTemplate.findFirst({
    where: { id, userId: user.id },
  });
  if (!template) return NextResponse.json({ error: "Template not found" }, { status: 404 });

  return NextResponse.json({ data: template });
}

// PUT /api/templates/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const template = await prisma.processingTemplate.findFirst({
    where: { id, userId: user.id },
  });
  if (!template) return NextResponse.json({ error: "Template not found" }, { status: 404 });

  const body = await request.json();

  const updated = await prisma.processingTemplate.update({
    where: { id },
    data: {
      name: body.name ?? template.name,
      description: body.description,
      isDefault: body.isDefault,
      processingOptions: body.processingOptions ?? template.processingOptions,
      publishMode: body.publishMode ?? template.publishMode,
    },
  });

  return NextResponse.json({ data: updated });
}

// DELETE /api/templates/[id]
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const template = await prisma.processingTemplate.findFirst({
    where: { id, userId: user.id },
  });
  if (!template) return NextResponse.json({ error: "Template not found" }, { status: 404 });

  await prisma.processingTemplate.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
