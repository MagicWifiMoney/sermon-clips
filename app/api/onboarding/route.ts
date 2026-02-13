import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const onboardingSchema = z.object({
  churchName: z.string().min(1).max(200).optional(),
  role: z.enum(["pastor", "comms-director", "volunteer", "other"]).optional(),
  primaryGoal: z.enum(["grow-social", "save-time", "reach-more-people", "repurpose-content"]).optional(),
});

export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const body = await request.json();
  const parsed = onboardingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      onboardingStep: "completed",
      onboardingData: parsed.data,
      onboardingCompletedAt: new Date(),
    },
  });

  return NextResponse.json({ success: true });
}
