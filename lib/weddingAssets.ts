import { stat } from "node:fs/promises";
import path from "node:path";

const weddingPicsDir = path.join(process.cwd(), "Wedding website pics");

export const weddingAssetNames = {
  logo: "logo.png",
  couple: "couple picture.jpg",
  namesAndVerse: "name pic.png",
  venue: "Skyline church.jpg"
} as const;

export async function getWeddingAssetUrl(fileName: string) {
  const filePath = path.join(weddingPicsDir, fileName);

  try {
    const fileStat = await stat(filePath);
    const query = new URLSearchParams({
      name: fileName,
      v: String(fileStat.mtimeMs)
    });
    return `/api/wedding-image?${query.toString()}`;
  } catch {
    const query = new URLSearchParams({ name: fileName });
    return `/api/wedding-image?${query.toString()}`;
  }
}
