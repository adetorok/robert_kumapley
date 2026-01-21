import type { Metadata } from "next";
import { aboutContent, testimonials } from "@/content/content";
import { Hero } from "@/components/sections/hero";
import { Timeline } from "@/components/sections/timeline";
import AboutMDX from "@/content/about.mdx";

export const metadata: Metadata = {
  title: "About Robert Kumapley",
  description:
    "Global Infrastructure & Asset Management executive leading enterprise transformation, data standards, sustainability, and digital enablement across multimodal systems.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="About"
        title="About Robert"
        subtitle={aboutContent.heroBio}
        description="Leadership narrative across EAM/CMMS transformation, operational excellence, sustainability, and digital enablement."
        ctas={[
          { label: "Hire Robert", href: "/services#inquiry", variant: "primary" },
          { label: "Book a Talk", href: "/speaking#booking", variant: "secondary" },
        ]}
      />

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-white">Signature focus areas</h3>
            <ul className="mt-3 space-y-2 text-white/75">
              {aboutContent.signatureFocus.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-white">Leadership themes</h3>
            <ul className="mt-3 space-y-2 text-white/75">
              {aboutContent.leadershipThemes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <AboutMDX />
        </div>
      </section>

      <Timeline title="Expertise" items={aboutContent.expertise} />
      <Timeline title="Career" items={aboutContent.career} />
      <Timeline title="Education & credentials" items={aboutContent.education} />

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-white">What peers say</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.role} className="rounded-xl border border-white/5 bg-white/5 p-4">
                <p className="text-white/70">{item.quote}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white">{item.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-white/60">Request references for verified testimonials.</div>
        </div>
      </section>
    </div>
  );
}
