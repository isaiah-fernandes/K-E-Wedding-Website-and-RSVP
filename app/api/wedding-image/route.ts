import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const weddingPicsDir = path.join(process.cwd(), "Wedding website pics");

const contentTypeByExt: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  if (!name) {
    return NextResponse.json({ error: "Missing image name" }, { status: 400 });
  }

  // Keep access locked to files directly under "Wedding website pics".
  if (name.includes("/") || name.includes("\\") || name.includes("..")) {
    return NextResponse.json({ error: "Invalid image name" }, { status: 400 });
  }

  const filePath = path.join(weddingPicsDir, name);

  try {
    const fileBuffer = await readFile(filePath);
    const ext = path.extname(name).toLowerCase();
    const contentType = contentTypeByExt[ext] ?? "application/octet-stream";

    return new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "no-store, max-age=0"
      }
    });
  } catch {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }
}

