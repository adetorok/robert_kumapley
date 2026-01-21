import type { Metadata } from "next";
import Image from "next/image";
import { aboutContent, testimonials } from "@/content/content";
import { Timeline } from "@/components/sections/timeline";

export const metadata: Metadata = {
  title: "About Robert Kumapley",
  description:
    "Global Infrastructure & Asset Management executive leading enterprise transformation, data standards, sustainability, and digital enablement across multimodal systems.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2 shadow-soft">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-200">About</p>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">Robert (Kwasi) Kumapley</h1>
            <p className="text-lg text-white/80">{aboutContent.heroBio}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <HeroCTA href="/hire#advisory-form" label="Hire Robert" variant="primary" />
              <HeroCTA href="/hire#speaking-form" label="Book a Call" variant="secondary" />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60">
              <Image
                src="/images/robert-headshot.jpg"
                alt="Robert Kumapley headshot"
                width={840}
                height={1050}
                sizes="(max-width: 768px) 90vw, 420px"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Executive Summary</h2>
            <p className="text-white/75">
              Global infrastructure and asset management leader modernizing multimodal transportation systems through EAM/CMMS,
              data standards, and digital enablement.
            </p>
            <p className="text-white/75">
              Focused on governance, lifecycle optimization, and adoption—turning strategy into measurable operational outcomes.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Signature Focus Areas</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {aboutContent.signatureFocus.slice(0, 6).map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 break-words">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-white">Signature Work</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {aboutContent.leadershipThemes.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-ink-900/60 p-4 text-white/80 break-words">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-white">Speaking Topics</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutContent.signatureFocus.slice(0, 6).map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-ink-900/60 p-4 text-white/80 break-words">
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <HeroCTA href="/hire#speaking-form" label="Invite Robert to Speak" variant="secondary" />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-white">Nonprofit Spotlight</h3>
            <p className="mt-3 text-white/75">
              Co-founder of MYGOAL, Inc., expanding support for families affected by autism, with inclusive education partnerships
              through Haven International.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <HeroCTA href="https://mygoalinc.org" label="Visit MYGOAL" variant="secondary" />
              <HeroCTA href="https://havenint.org/" label="Haven International" variant="ghost" />
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-white">Contact & Advisory</h3>
            <p className="mt-3 text-white/75">Advisory, transformation, and speaking inquiries are routed directly.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <HeroCTA href="/hire#advisory-form" label="Hire Robert" variant="primary" />
              <HeroCTA href="/contact#contact-form" label="Contact" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      <Timeline title="Career Highlights" items={aboutContent.career} />
      <Timeline title="Education & credentials" items={aboutContent.education} />

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
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

function HeroCTA({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <a
      href={href}
      className={`rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
        variant === "primary"
          ? "bg-accent-500 text-white hover:bg-accent-400"
          : variant === "secondary"
            ? "border border-white/20 text-white hover:border-accent-300 hover:text-accent-50 bg-white/5"
            : "text-white/80 hover:text-white hover:bg-white/5 border border-transparent"
      } w-full sm:w-auto`}
    >
      {label}
    </a>
  );
}
