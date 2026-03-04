import { SectionShell } from "@/components/SectionShell";

export default function NotFound() {
  return (
    <SectionShell title="Page Not Found" subtitle="We could not find what you were looking for.">
      <p className="text-center text-ink/80">Please use the navigation above to continue browsing.</p>
    </SectionShell>
  );
}