"use client";

import { useMemo, useState } from "react";
import type { Attendance, MealPreference, RsvpPayload } from "@/types/rsvp";
import { getFieldErrors, validateRsvpPayload } from "@/lib/rsvp/validation";

type FormErrors = Partial<Record<keyof RsvpPayload, string>>;

const initialForm: RsvpPayload = {
  guestName: "",
  email: "",
  phone: "",
  attending: "Yes",
  additionalGuests: 0,
  mealPreferences: "Vegetarian",
  songRequests: "",
  messageOrPrayers: ""
};

type ApiResponse = {
  message?: string;
  error?: string;
  requestId?: string;
  fieldErrors?: FormErrors;
};

export function RsvpForm() {
  const [formData, setFormData] = useState<RsvpPayload>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusKind, setStatusKind] = useState<"success" | "error" | null>(null);

  const guestOptions = useMemo(() => Array.from({ length: 11 }, (_, i) => i), []);

  function updateField<K extends keyof RsvpPayload>(field: K, value: RsvpPayload[K]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatusMessage(null);
    setStatusKind(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validated = validateRsvpPayload(formData);
    if (!validated.success) {
      setErrors(getFieldErrors(validated.issues));
      setStatusKind("error");
      setStatusMessage("Please fix the highlighted fields.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusKind(null);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated.data)
      });

      let result: ApiResponse = {};
      try {
        result = (await response.json()) as ApiResponse;
      } catch {
        result = {};
      }

      if (!response.ok) {
        if (result.fieldErrors) {
          setErrors((prev) => ({ ...prev, ...result.fieldErrors }));
        }

        const message = result.requestId
          ? `${result.error ?? "Submission failed."} (Ref: ${result.requestId})`
          : (result.error ?? "Submission failed.");

        setStatusKind("error");
        setStatusMessage(message);
        return;
      }

      setFormData(initialForm);
      setErrors({});
      setStatusKind("success");
      setStatusMessage(result.message ?? "RSVP submitted successfully.");
    } catch {
      setStatusKind("error");
      setStatusMessage("Network error while sending RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="guestName" className="mb-1 block text-sm font-medium">
          Guest name <span className="text-rose">*</span>
        </label>
        <input
          id="guestName"
          name="guestName"
          type="text"
          value={formData.guestName}
          onChange={(e) => updateField("guestName", e.target.value)}
          className="w-full rounded-lg border border-rose/40 px-3 py-2 outline-none ring-sage focus:ring"
          required
        />
        {errors.guestName ? <p className="mt-1 text-sm text-red-600">{errors.guestName}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email <span className="text-rose">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          className="w-full rounded-lg border border-rose/40 px-3 py-2 outline-none ring-sage focus:ring"
          required
        />
        {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          className="w-full rounded-lg border border-rose/40 px-3 py-2 outline-none ring-sage focus:ring"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="attending" className="mb-1 block text-sm font-medium">
            Attending?
          </label>
          <select
            id="attending"
            name="attending"
            value={formData.attending}
            onChange={(e) => updateField("attending", e.target.value as Attendance)}
            className="w-full rounded-lg border border-rose/40 px-3 py-2 outline-none ring-sage focus:ring"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.attending ? <p className="mt-1 text-sm text-red-600">{errors.attending}</p> : null}
        </div>

        <div>
          <label htmlFor="additionalGuests" className="mb-1 block text-sm font-medium">
            Number of additional guests?
          </label>
          <select
            id="additionalGuests"
            name="additionalGuests"
            value={formData.additionalGuests}
            onChange={(e) => updateField("additionalGuests", Number(e.target.value))}
            className="w-full rounded-lg border border-rose/40 px-3 py-2 outline-none ring-sage focus:ring"
          >
            {guestOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          {errors.additionalGuests ? (
            <p className="mt-1 text-sm text-red-600">{errors.additionalGuests}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="mealPreferences" className="mb-1 block text-sm font-medium">
          Meal preferences
        </label>
        <select
          id="mealPreferences"
          name="mealPreferences"
          value={formData.mealPreferences}
          onChange={(e) => updateField("mealPreferences", e.target.value as MealPreference)}
          className="w-full rounded-lg border border-rose/40 px-3 py-2 outline-none ring-sage focus:ring"
          required
        >
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non Vegetarian">Non Vegetarian</option>
        </select>
        {errors.mealPreferences ? (
          <p className="mt-1 text-sm text-red-600">{errors.mealPreferences}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="songRequests" className="mb-1 block text-sm font-medium">
          Song requests
        </label>
        <textarea
          id="songRequests"
          name="songRequests"
          rows={3}
          value={formData.songRequests}
          onChange={(e) => updateField("songRequests", e.target.value)}
          className="w-full rounded-lg border border-rose/40 px-3 py-2 outline-none ring-sage focus:ring"
        />
      </div>

      <div>
        <label htmlFor="messageOrPrayers" className="mb-1 block text-sm font-medium">
          Message/Prayers for the couple
        </label>
        <textarea
          id="messageOrPrayers"
          name="messageOrPrayers"
          rows={4}
          value={formData.messageOrPrayers}
          onChange={(e) => updateField("messageOrPrayers", e.target.value)}
          className="w-full rounded-lg border border-rose/40 px-3 py-2 outline-none ring-sage focus:ring"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center rounded-full bg-sage px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-sage/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Submit RSVP"}
      </button>

      {statusMessage && statusKind === "success" ? (
        <p className="rounded-lg border border-green-300 bg-green-50 p-3 text-sm text-green-700">
          {statusMessage}
        </p>
      ) : null}

      {statusMessage && statusKind === "error" ? (
        <p className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
