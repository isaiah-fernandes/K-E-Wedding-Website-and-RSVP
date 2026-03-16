# K&E Wedding Website (Next.js + Google Sheets RSVP)

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- API Route (`/api/rsvp`) on Node.js runtime inside Next.js
- Google Sheets via `googleapis`
- Ready for Vercel deployment

## 1) Scaffold Commands
Run these commands in this project folder:

```bash
npm install
npm run dev
```

If you want to scaffold from scratch in a new empty folder instead:

```bash
npx create-next-app@latest ke-wedding-website --ts --tailwind --eslint --app --src-dir=false --import-alias "@/*"
cd ke-wedding-website
npm install googleapis
```

## 2) Folder Structure

```text
website code/
  app/
    api/
      rsvp/
        route.ts
    meet-the-couple/
      page.tsx
    photos/
      page.tsx
    qa/
      page.tsx
    rsvp/
      page.tsx
    wedding-party/
      page.tsx
    globals.css
    layout.tsx
    not-found.tsx
    page.tsx
  components/
    SectionShell.tsx
    SiteFooter.tsx
    SiteNav.tsx
    rsvp/
      RsvpForm.tsx
  lib/
    rsvp/
      googleSheetsService.ts
      validation.ts
  types/
    rsvp.ts
  .env.local.example
  .gitignore
  next-env.d.ts
  next.config.ts
  package.json
  postcss.config.js
  tailwind.config.ts
  tsconfig.json
  README.md
```

## 3) Environment Variables
Set these in `.env.local` (local) and in your hosting provider env settings (production):

- `GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `GOOGLE_SHEETS_WORKSHEET_NAME` (optional, defaults to `RSVP`)

### Private Key newline handling
In `.env.local`, keep `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` as a single quoted string with escaped newlines (`\\n`).
At runtime, code converts escaped newlines to real newlines using:

```ts
process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n")
```

## 4) Google Sheets Setup
1. Create a Google Cloud service account and download credentials.
2. Enable Google Sheets API in your GCP project.
3. Share your target sheet with the service account email (Editor).
4. Add a tab named `RSVP`.
5. Optional header row in columns A:G:
   - Timestamp
   - Full Name
   - Email
   - Attending
   - Guests
   - Meal Preference
   - Message

## 5) Test Locally
Start dev server:

```bash
npm run dev
```

Test API route with curl:

```bash
curl -X POST http://localhost:3000/api/rsvp \
  -H "Content-Type: application/json" \
  -d '{
    "guestName":"Taylor Example",
    "email":"taylor@example.com",
    "attending":"Yes",
    "additionalGuests":2,
    "mealPreferences":"Vegetarian",
    "songRequests":"Celebrate by Kool & The Gang",
    "messageOrPrayers":"Can'\''t wait!"
  }'
```

## 6) Vercel Deployment Readiness
- Project is App Router-compatible and Vercel-ready.
- Add the same env vars in Vercel Project Settings -> Environment Variables:
  - `GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL`
  - `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
  - `GOOGLE_SHEETS_SPREADSHEET_ID`
  - `GOOGLE_SHEETS_WORKSHEET_NAME` (optional)
- For `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` in Vercel, paste full key with literal newlines or escaped newlines. The server code handles escaped newline format.

## 7) Routes Implemented
- `/` Home
- `/photos`
- `/meet-the-couple`
- `/wedding-party`
- `/qa`
- `/rsvp`
- `/api/rsvp` (POST)
