import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Clerk webhook events for user sync
// Configure webhook at: clerk.com > Webhooks > user.created, user.updated, user.deleted

interface ClerkWebhookEvent {
  type: string;
  data: {
    id: string;
    email_addresses: Array<{ email_address: string }>;
    first_name: string | null;
    last_name: string | null;
    image_url: string | null;
  };
}

export async function POST(request: NextRequest) {
  // TODO: Verify webhook signature with CLERK_WEBHOOK_SECRET using svix
  // For now, basic parsing — add signature verification before production

  const body = (await request.json()) as ClerkWebhookEvent;
  const { type, data } = body;

  try {
    if (type === "user.created" || type === "user.updated") {
      const email = data.email_addresses[0]?.email_address;
      if (!email) {
        return NextResponse.json({ error: "No email found" }, { status: 400 });
      }

      const name = [data.first_name, data.last_name].filter(Boolean).join(" ") || null;

      await prisma.user.upsert({
        where: { clerkId: data.id },
        update: { email, name, imageUrl: data.image_url },
        create: { clerkId: data.id, email, name, imageUrl: data.image_url },
      });
    }

    if (type === "user.deleted") {
      await prisma.user.delete({
        where: { clerkId: data.id },
      }).catch(() => {
        // User may not exist in DB yet
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Clerk Webhook]", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
