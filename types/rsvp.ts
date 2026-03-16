export type Attendance = "Yes" | "No";
export type MealPreference = "Vegetarian" | "Non Vegetarian";

export type RsvpPayload = {
  guestName: string;
  email: string;
  phone?: string;
  attending: Attendance;
  additionalGuests: number;
  mealPreferences: MealPreference;
  songRequests?: string;
  messageOrPrayers?: string;
};
