import { google } from "googleapis";
import type { RsvpPayload } from "@/types/rsvp";

type RsvpEnvConfig = {
  clientEmail: string;
  privateKey: string;
  spreadsheetId: string;
  worksheetName: string;
};

type RsvpServiceErrorCode = "RSVP_CONFIG_ERROR" | "RSVP_SHEETS_WRITE_ERROR";

export class RsvpServiceError extends Error {
  code: RsvpServiceErrorCode;

  constructor(code: RsvpServiceErrorCode, message: string, options?: { cause?: unknown }) {
    super(message);
    this.name = "RsvpServiceError";
    this.code = code;
    this.cause = options?.cause;
  }
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value || value.trim() === "") {
    throw new RsvpServiceError("RSVP_CONFIG_ERROR", `Missing required environment variable: ${name}`);
  }
  return value.trim();
}

function normalizePrivateKey(value: string): string {
  let key = value.trim();

  // Vercel env values are raw strings; users often paste .env-style quoted keys.
  if (key.startsWith('"') && key.endsWith('"')) {
    key = key.slice(1, -1);
  }

  return key.replace(/\\n/g, "\n");
}

function getRsvpEnvConfig(): RsvpEnvConfig {
  return {
    clientEmail: getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL"),
    privateKey: normalizePrivateKey(getRequiredEnv("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY")),
    spreadsheetId: getRequiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID"),
    worksheetName: process.env.GOOGLE_SHEETS_WORKSHEET_NAME?.trim() || "RSVP"
  };
}

export async function appendRsvpToSheet(payload: RsvpPayload, requestId: string) {
  const config = getRsvpEnvConfig();

  try {
    const auth = new google.auth.JWT({
      email: config.clientEmail,
      key: config.privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });

    const sheets = google.sheets({ version: "v4", auth });

    const row = [
      new Date().toISOString(),
      payload.guestName,
      payload.email,
      payload.phone ?? "",
      payload.attending,
      payload.additionalGuests,
      payload.mealPreferences,
      payload.songRequests ?? "",
      payload.messageOrPrayers ?? ""
    ];

    console.log(`[RSVP][${requestId}] Appending row to "${config.worksheetName}"`);

    await sheets.spreadsheets.values.append({
      spreadsheetId: config.spreadsheetId,
      range: `${config.worksheetName}!A:I`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [row]
      }
    });
  } catch (error) {
    throw new RsvpServiceError("RSVP_SHEETS_WRITE_ERROR", "Failed to write RSVP to Google Sheets.", {
      cause: error
    });
  }
}
