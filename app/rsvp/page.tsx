import { SectionShell } from "@/components/SectionShell";
import { RsvpForm } from "@/components/rsvp/RsvpForm";

export default function RsvpPage() {
  return (
    <SectionShell title="RSVP" subtitle="Please let us know if you can celebrate with us">
      <RsvpForm />
    </SectionShell>
  );
}
