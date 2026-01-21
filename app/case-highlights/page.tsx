import type { Metadata } from "next";
import { caseHighlights } from "@/content/content";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Case Highlights | Robert Kumapley",
  description: "Confidentiality-safe enterprise asset management and transformation highlights.",
};

export default function CaseHighlightsPage() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Case Highlights"
        title="Confidentiality-safe outcomes"
        subtitle="Selected, sanitized highlights from enterprise EAM, data standards, and transformation programs."
        ctas={[{ label: "Request details", href: "/contact", variant: "secondary" }]}
      />

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <ul className="space-y-3 text-lg text-white/80">
            {caseHighlights.outcomes.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-white/60">{caseHighlights.note}</p>
        </div>
      </section>
    </div>
  );
}
