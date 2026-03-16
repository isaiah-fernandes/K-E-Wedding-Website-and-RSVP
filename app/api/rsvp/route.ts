import { NextResponse } from "next/server";
import { appendRsvpToSheet, RsvpServiceError } from "@/lib/rsvp/googleSheetsService";
import { getFieldErrors, validateRsvpPayload } from "@/lib/rsvp/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();

  try {
    console.log(`[RSVP][${requestId}] Incoming submission`);
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      console.warn(`[RSVP][${requestId}] Invalid JSON payload`);
      return NextResponse.json(
        {
          requestId,
          error: "Invalid JSON payload."
        },
        { status: 400 }
      );
    }

    const validated = validateRsvpPayload(body);
    if (!validated.success) {
      console.warn(`[RSVP][${requestId}] Validation failed`, validated.issues);
      return NextResponse.json(
        {
          requestId,
          error: "Validation failed.",
          fieldErrors: getFieldErrors(validated.issues)
        },
        { status: 422 }
      );
    }

    await appendRsvpToSheet(validated.data, requestId);
    console.log(`[RSVP][${requestId}] Submission stored successfully`);

    return NextResponse.json(
      {
        requestId,
        message: "RSVP submitted successfully."
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof RsvpServiceError) {
      if (error.code === "RSVP_CONFIG_ERROR") {
        console.error(`[RSVP][${requestId}] Configuration error`, error.message);
        return NextResponse.json(
          {
            requestId,
            error: "RSVP service is not configured correctly."
          },
          { status: 500 }
        );
      }

      console.error(`[RSVP][${requestId}] Google Sheets write error`, error.cause ?? error);
      return NextResponse.json(
        {
          requestId,
          error: "Could not save RSVP right now. Please try again shortly."
        },
        { status: 502 }
      );
    }

    console.error(`[RSVP][${requestId}] Unexpected server error`, error);
    return NextResponse.json(
      {
        requestId,
        error: "Unexpected server error while submitting RSVP."
      },
      { status: 500 }
    );
  }
}
