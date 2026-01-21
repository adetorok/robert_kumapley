import type { Metadata } from "next";
import { speakingContent, servicesContent } from "@/content/content";
import { Hero } from "@/components/sections/hero";
import { TopicsList } from "@/components/sections/topics-list";
import { LeadForm } from "@/components/forms/lead-form";
import { LinkButton } from "@/components/ui/button";
import { ConferenceOutreach } from "@/components/conference-outreach";
import SpeakingMDX from "@/content/speaking.mdx";

export const metadata: Metadata = {
  title: "Speaking | Robert Kumapley",
  description:
    "Speaking topics on EAM, data standards, digital twins, predictive analytics, AI blockers, and operational excellence.",
};

export default function SpeakingPage() {
  return (
    <div className="space-y-12">
        <Hero
          eyebrow="Speaking"
          title={speakingContent.title}
          subtitle={speakingContent.description}
          ctas={[
            { label: "Book a Talk", href: "#booking", variant: "primary" },
            { label: "Download Speaker Kit", href: "/speaker-kit", variant: "secondary" },
          ]}
        />

      <TopicsList topics={speakingContent.topics} title="Topics" />

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <SpeakingMDX />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-200">Flagship</p>
            <h3 className="text-2xl font-semibold text-white">{speakingContent.flagshipTalk.title}</h3>
            <p className="text-white/70">{speakingContent.flagshipTalk.timing}</p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-white">Who this is for</p>
              <ul className="mt-2 space-y-1 text-white/70">
                {speakingContent.flagshipTalk.who.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Outcomes</p>
              <ul className="mt-2 space-y-1 text-white/70">
                {speakingContent.flagshipTalk.outcomes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Formats</p>
              <ul className="mt-2 space-y-1 text-white/70">
                {speakingContent.flagshipTalk.formats.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <LinkButton href="#booking" variant="secondary" className="mt-3">
                Invite Robert to speak
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-white">Packages</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {servicesContent.packages.slice(0, 4).map((pkg) => (
              <div key={pkg.name} className="rounded-xl border border-white/10 bg-ink-900/60 p-5">
                <h4 className="text-lg font-semibold text-white">{pkg.name}</h4>
                <p className="text-sm text-white/60">Ideal audience: {pkg.audience}</p>
                <p className="mt-2 text-sm text-white/75">What’s included: {pkg.includes.join(", ")}.</p>
                <p className="text-sm text-white/75">Outcomes: {pkg.outcomes.join(", ")}.</p>
                <LinkButton href="#booking" variant="secondary" className="mt-3">
                  Request availability
                </LinkButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <ConferenceOutreach />
        </div>
      </section>

      <section id="booking" className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">Book Robert</h3>
            <p className="mt-3 text-white/70">
              Speaking form routes directly to the speaking inbox. Add event details for faster turnaround.
            </p>
          </div>
          <LeadForm formKey="speaking" intent="Speaking" />
        </div>
      </section>
    </div>
  );
}
