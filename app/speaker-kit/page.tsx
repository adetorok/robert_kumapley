import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { speakerKit } from "@/content/content";
import { LinkButton } from "@/components/ui/button";
import { SpeakerKitForm } from "@/components/forms/speaker-kit-form";

export const metadata: Metadata = {
  title: "Speaker Kit | Robert Kumapley",
  description: "Download bios, headshots, topics, and request a customized speaker kit.",
};

export default function SpeakerKitPage() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Speaker Kit"
        title="Speaker kit & press"
        subtitle="Download bios, headshots, topics, and booking details."
        ctas={[
          { label: "Download 1-page PDF", href: "/api/speaker-sheet", variant: "primary" },
          { label: "Book a Talk", href: "/speaking#booking", variant: "secondary" },
        ]}
      />

      <section id="bios" className="px-6">
        <div className="mx-auto grid max-w-6xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent-200">50-word</p>
            <p className="mt-2 text-white/80">{speakerKit.bios.short}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent-200">120-word</p>
            <p className="mt-2 text-white/80">{speakerKit.bios.medium}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent-200">250-word</p>
            <p className="mt-2 text-white/80">{speakerKit.bios.long}</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-white">Approved headshots</h3>
          <p className="text-white/70">Swap in final assets when available.</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/5] rounded-xl border border-dashed border-white/10 bg-white/5"></div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {speakerKit.downloads.map((dl) => (
              <LinkButton key={dl.href} href={dl.href} variant="secondary">
                {dl.label}
              </LinkButton>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">Topics & formats</h3>
            <ul className="mt-3 space-y-2 text-white/75">
              {speakerKit.packages.map((pkg) => (
                <li key={pkg.name}>
                  <strong>{pkg.name}</strong>: {pkg.audience}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SpeakerKitForm anchorId="speaker-kit-form" redirectType="speaker-kit" />
          </div>
        </div>
      </section>
    </div>
  );
}
