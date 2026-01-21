import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CardGrid } from "@/components/sections/card-grid";
import { FeaturedMedia } from "@/components/sections/featured";
import { BioSection } from "@/components/sections/bio";
import { homeContent, trustTags } from "@/content/content";
import { LinkButton } from "@/components/ui/button";
import { MultiStepForm } from "@/components/forms/multi-step";
import { ContactRouterForm } from "@/components/forms/router-form";

export const metadata: Metadata = {
  title: "Robert (Kwasi) Kumapley | Global Infrastructure & EAM Executive",
  description:
    "Enterprise transformation, EAM/CMMS (Maximo), data governance, lifecycle optimization, sustainability, and digital enablement for multimodal infrastructure.",
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero
        eyebrow="Global Infrastructure & EAM Leadership"
        title={homeContent.hero.nameLine}
        subtitle={homeContent.hero.title}
        description={homeContent.hero.subtitle}
        ctas={[
          { label: "Request Advisory Consult", href: "/hire#advisory-form", variant: "primary" },
          { label: "Book a Talk", href: "/hire#speaking-form", variant: "secondary" },
          { label: "Apply for Mentorship", href: "/hire#mentorship-form", variant: "ghost" },
        ]}
        credibility={homeContent.hero.credibilityStrip}
      />

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {trustTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">What I Do</h2>
        </div>
      </section>
      <CardGrid cards={homeContent.whatIDo} columns={3} />

      <FeaturedMedia items={homeContent.featured} />

      <BioSection paragraphs={homeContent.shortBio} />

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {homeContent.workWith.map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-white/70">{item.description}</p>
              <LinkButton href={item.cta.href} className="mt-4">
                {item.cta.label}
              </LinkButton>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent-200">Spotlight</p>
            <h3 className="text-2xl font-semibold text-white">{homeContent.spotlight.title}</h3>
            <p className="mt-3 text-white/70">{homeContent.spotlight.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {homeContent.spotlight.ctas.map((cta) => (
              <LinkButton key={cta.href} href={cta.href} variant="secondary">
                {cta.label}
              </LinkButton>
            ))}
          </div>
        </div>
      </section>

      <section id="work-with-robert" className="px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">Work with Robert</h3>
            <p className="mt-3 text-white/70">
              Clear pathways for advisory, speaking, mentorship, and workshops. Use the guided flow or choose a dedicated form.
            </p>
            <div className="mt-4 space-y-3">
              <LinkButton href="/services#inquiry" variant="secondary">
                Request Advisory Consult
              </LinkButton>
              <LinkButton href="/speaking#booking" variant="ghost">
                Book a Talk
              </LinkButton>
              <LinkButton href="/contact#mentorship" variant="ghost">
                Apply for Mentorship
              </LinkButton>
            </div>
          </div>
          <MultiStepForm />
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-white">Direct forms</h3>
          <ContactRouterForm />
        </div>
      </section>
    </div>
  );
}
