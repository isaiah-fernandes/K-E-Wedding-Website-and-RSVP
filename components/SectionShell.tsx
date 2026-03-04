import type { ReactNode } from "react";

type SectionShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function SectionShell({ title, subtitle, children }: SectionShellProps) {
  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-semibold text-[#541a28] sm:text-5xl">{title}</h1>
        {subtitle ? <p className="text-base text-ink/75 sm:text-lg">{subtitle}</p> : null}
      </header>
      <div className="section-card">{children}</div>
    </section>
  );
}
