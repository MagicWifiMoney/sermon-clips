import { NextRequest, NextResponse } from "next/server";
import { appendFileSync, mkdirSync } from "fs";
import { join } from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const entry = { ...data, submittedAt: new Date().toISOString() };
    const dir = join(process.cwd(), "data");
    mkdirSync(dir, { recursive: true });
    appendFileSync(join(dir, "survey-responses.jsonl"), JSON.stringify(entry) + "\n");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
