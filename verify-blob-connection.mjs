import { put, del } from "@vercel/blob";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadDotEnvLocal() {
  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  const raw = readFileSync(envPath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim().replace(/^['"]|['"]$/g, "");
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

function requireBlobToken() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    throw new Error(
      "BLOB_READ_WRITE_TOKEN is not set. Add it to .env.local or your shell env."
    );
  }
  return token;
}

async function main() {
  loadDotEnvLocal();
  const token = requireBlobToken();
  const key = `healthchecks/blob-${Date.now()}-${Math.random().toString(36).slice(2)}.txt`;
  const payload = `blob-check ${new Date().toISOString()}`;
  let uploadedUrl;

  try {
    const uploaded = await put(key, payload, {
      access: "public",
      contentType: "text/plain",
      token,
      addRandomSuffix: false,
    });
    uploadedUrl = uploaded.url;

    const response = await fetch(uploaded.url, { method: "GET" });
    if (!response.ok) {
      throw new Error(`Uploaded blob was not readable. HTTP ${response.status}`);
    }

    const body = await response.text();
    if (body !== payload) {
      throw new Error("Uploaded blob contents did not match expected payload");
    }

    console.log("Blob verification succeeded.");
    console.log(`Wrote and read: ${uploaded.url}`);
  } finally {
    if (uploadedUrl) {
      await del(uploadedUrl, { token });
      console.log("Cleaned up verification blob.");
    }
  }
}

main().catch((error) => {
  console.error("Blob verification failed.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
