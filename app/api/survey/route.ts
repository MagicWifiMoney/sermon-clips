import { NextRequest, NextResponse } from "next/server";
import { appendFileSync, mkdirSync } from "fs";
import { join } from "path";

const TALLY_FORM_ID = process.env.TALLY_FORM_ID || "ZjNRPy";
const TALLY_FORM_URL = `https://tally.so/r/${TALLY_FORM_ID}`;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const entry = { ...data, submittedAt: new Date().toISOString() };

    // 1. Save locally as JSONL
    const dir = join(process.cwd(), "data");
    mkdirSync(dir, { recursive: true });
    appendFileSync(join(dir, "survey-responses.jsonl"), JSON.stringify(entry) + "\n");

    // 2. Note: Tally's API does not support creating submissions programmatically.
    //    The Tally form (https://tally.so/r/ZjNRPy) is used as the standalone survey
    //    delivered via email drip. When users fill that out, Tally fires a webhook
    //    to /api/survey/tally-webhook which updates the DB.
    //    Landing page form submissions are captured here in JSONL only.

    return NextResponse.json({ success: true, tallyFormUrl: TALLY_FORM_URL });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
