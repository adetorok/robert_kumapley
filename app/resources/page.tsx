import type { Metadata } from "next";
import { resourcesContent } from "@/content/content";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Resources | Robert Kumapley",
  description: "Verified resources, downloads, and symposium materials curated by Robert Kumapley.",
};

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Resources"
        title="Resources & downloadables"
        subtitle="Verified links, presentations, and symposium materials."
        ctas={[{ label: "Download speaker sheet", href: "/speaker-kit", variant: "secondary" }]}
      />

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <div className="grid gap-4 md:grid-cols-2">
            {resourcesContent.featured.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-ink-900/60 p-4 text-white/80 hover:border-accent-400/60"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-accent-200">Featured</p>
                <p className="mt-2 font-semibold text-white">{item.label}</p>
                <p className="text-xs text-white/50">{item.href}</p>
              </a>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Downloadables</h3>
            <ul className="mt-3 space-y-2 text-white/75">
              {resourcesContent.downloads.map((item) => (
                <li key={item.href}>
                  <a className="underline" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
