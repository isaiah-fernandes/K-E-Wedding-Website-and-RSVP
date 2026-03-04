import type { Attendance, MealPreference, RsvpPayload } from "@/types/rsvp";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_ATTENDANCE: Attendance[] = ["Yes", "No"];
const VALID_MEALS: MealPreference[] = ["Vegetarian", "Non Vegetarian"];

export type RsvpField = keyof RsvpPayload;

export type ValidationIssue = {
  field: RsvpField;
  message: string;
};

export type ValidationResult =
  | { success: true; data: RsvpPayload }
  | { success: false; issues: ValidationIssue[] };

function toCleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function toOptionalString(value: unknown): string | undefined {
  const cleaned = toCleanString(value);
  return cleaned.length > 0 ? cleaned : undefined;
}

function toNumber(value: unknown): number {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? NaN : parsed;
  }

  return NaN;
}

export function getFieldErrors(issues: ValidationIssue[]) {
  return issues.reduce<Partial<Record<RsvpField, string>>>((acc, issue) => {
    if (!acc[issue.field]) {
      acc[issue.field] = issue.message;
    }
    return acc;
  }, {});
}

export function validateRsvpPayload(input: unknown): ValidationResult {
  const body = input as Partial<Record<RsvpField, unknown>>;
  const issues: ValidationIssue[] = [];

  const guestName = toCleanString(body?.guestName);
  if (!guestName) {
    issues.push({ field: "guestName", message: "Guest name is required." });
  }

  const email = toCleanString(body?.email).toLowerCase();
  if (!email) {
    issues.push({ field: "email", message: "Email is required." });
  } else if (!EMAIL_REGEX.test(email)) {
    issues.push({ field: "email", message: "Email must be valid." });
  }

  const phone = toOptionalString(body?.phone);

  const attending = body?.attending as Attendance;
  if (!VALID_ATTENDANCE.includes(attending)) {
    issues.push({ field: "attending", message: "Attendance selection is invalid." });
  }

  const additionalGuests = toNumber(body?.additionalGuests);
  if (!Number.isInteger(additionalGuests) || additionalGuests < 0 || additionalGuests > 10) {
    issues.push({
      field: "additionalGuests",
      message: "Additional guests must be an integer from 0 to 10."
    });
  }

  const mealPreferences = body?.mealPreferences as MealPreference;
  if (!VALID_MEALS.includes(mealPreferences)) {
    issues.push({
      field: "mealPreferences",
      message: "Meal preference must be Vegetarian or Non Vegetarian."
    });
  }

  const songRequests = toOptionalString(body?.songRequests);
  const messageOrPrayers = toOptionalString(body?.messageOrPrayers);

  if (issues.length > 0) {
    return { success: false, issues };
  }

  return {
    success: true,
    data: {
      guestName,
      email,
      phone,
      attending,
      additionalGuests,
      mealPreferences,
      songRequests,
      messageOrPrayers
    }
  };
}
