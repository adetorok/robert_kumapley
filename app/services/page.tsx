import type { Metadata } from "next";
import { servicesContent } from "@/content/content";
import { Hero } from "@/components/sections/hero";
import { LinkButton } from "@/components/ui/button";
import { MultiStepForm } from "@/components/forms/multi-step";

export const metadata: Metadata = {
  title: "Services | Robert Kumapley",
  description: "Advisory, speaking, mentorship, and workshops for enterprise transformation and infrastructure asset management.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <Hero
        eyebrow="Services"
        title={servicesContent.header.title}
        subtitle={servicesContent.header.subtitle}
        ctas={[
          { label: "Request Advisory Consult", href: "/hire#advisory-form", variant: "primary" },
          { label: "Book a Talk", href: "/hire#speaking-form", variant: "secondary" },
        ]}
      />

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {servicesContent.tracks.map((track) => (
            <div key={track.id} className="card space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-200">{track.id}</p>
              <h3 className="text-xl font-semibold text-white">{track.name}</h3>
              <p className="text-white/70">{track.description}</p>
              {track.engagementAreas && (
                <div>
                  <p className="text-sm font-semibold text-white">Common engagement areas</p>
                  <ul className="mt-2 space-y-2 text-sm text-white/70">
                    {track.engagementAreas.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {track.formats && (
                <div>
                  <p className="text-sm font-semibold text-white">Typical formats</p>
                  <ul className="mt-2 space-y-2 text-sm text-white/70">
                    {track.formats.map((fmt) => (
                      <li key={fmt}>{fmt}</li>
                    ))}
                  </ul>
                </div>
              )}
              <LinkButton
                href={
                  track.id === "speaking"
                    ? "/hire#speaking-form"
                    : track.id === "mentorship"
                      ? "/hire#mentorship-form"
                      : "/hire#advisory-form"
                }
              >
                {track.cta}
              </LinkButton>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-white">Engagement structure</h3>
          <ul className="mt-3 grid gap-3 md:grid-cols-2 text-white/75">
            {servicesContent.engagementStructure.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-white">Packages (scope only, no pricing)</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {servicesContent.packages.map((pkg) => (
              <div key={pkg.name} className="rounded-xl border border-white/10 bg-ink-900/60 p-5">
                <h4 className="text-lg font-semibold text-white">{pkg.name}</h4>
                <p className="text-sm text-white/60">Ideal audience: {pkg.audience}</p>
                <div className="mt-2 text-sm text-white/75">
                  <p className="font-semibold">What’s included</p>
                  <ul className="mt-2 space-y-1">
                    {pkg.includes.map((inc) => (
                      <li key={inc}>• {inc}</li>
                    ))}
                  </ul>
                  <p className="mt-3 font-semibold">Typical outcomes</p>
                  <ul className="mt-2 space-y-1">
                    {pkg.outcomes.map((out) => (
                      <li key={out}>• {out}</li>
                    ))}
                  </ul>
                </div>
                <LinkButton href="/hire#advisory-form" variant="secondary" className="mt-4">
                  Request availability
                </LinkButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">Inquiry</h3>
            <p className="mt-3 text-white/70">
              Select your path: Advisory, Speaking, Mentorship, or Workshop. This form routes directly to the right inbox.
            </p>
          </div>
          <MultiStepForm anchorId="advisory-form" />
        </div>
      </section>
    </div>
  );
}
