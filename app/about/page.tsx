import type { Metadata } from "next";
import Image from "next/image";
import { aboutContent, testimonials, speakingContent } from "@/content/content";

export const metadata: Metadata = {
  title: "About Robert Kumapley",
  description:
    "Global Infrastructure & Asset Management executive leading enterprise transformation, data standards, sustainability, and digital enablement across multimodal systems.",
};

export default function AboutPage() {
  const focusCards = aboutContent.signatureFocus.slice(0, 6).map((item, idx) => ({
    title: item,
    icon: ["🛠️", "📊", "🌐", "⚙️", "🌱", "🚀"][idx % 6],
    bullets: [
      "Governance and standards for scale",
      "Adoption and measurable outcomes",
      "Data-driven decision support",
    ],
  }));

  const impactCards = [
    {
      title: "Enterprise Asset Management",
      body: "Built governance, data standards, and sustained adoption for multimodal infrastructure portfolios.",
    },
    {
      title: "Digital Enablement",
      body: "Aligned CMMS, digital twins, and analytics with operating models to unlock reliability and ROI.",
    },
    {
      title: "Change Leadership",
      body: "Guided cross-functional teams to execute roadmaps, manage risk, and realize benefits at scale.",
    },
  ];

  const speakingTopics = speakingContent.topics.slice(0, 8);

  const careerTimeline = aboutContent.career.map((entry) => {
    const [rolePart, orgPart] = entry.split("—").map((s) => s.trim());
    return {
      label: rolePart || entry,
      detail: orgPart || "",
      bullet: "Led EAM/CMMS governance, adoption, and performance outcomes.",
    };
  });

  return (
    <div className="space-y-12">
      <section className="px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-2 shadow-soft">
          <div className="space-y-4 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-200">About</p>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">Robert (Kwasi) Kumapley</h1>
            <p className="text-lg text-white/80">Global Infrastructure & Enterprise Asset Management Executive</p>
            <p className="text-white/75">
              Guiding enterprise transformation, data standards, and digitally enabled operations for multimodal
              transportation systems. Proven at aligning governance, technology, and adoption to deliver measurable outcomes.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <HeroCTA href="/hire#advisory-form" label="Hire Robert" variant="primary" />
              <HeroCTA href="/hire#speaking-form" label="Book a Call" variant="secondary" />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60">
              <Image
                src="/images/robert-headshot.jpg"
                alt="Robert Kumapley headshot"
                width={880}
                height={1100}
                sizes="(max-width: 768px) 90vw, 440px"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-4 flex max-w-6xl flex-wrap gap-2">
          {["Port Authority NY/NJ", "EAM/CMMS (Maximo)", "Digital Twins", "ESG & Resilience", "Governance"].map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft md:grid-cols-2">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-xl font-semibold text-white">Executive Summary</h2>
            <p className="text-white/75">
              Executive leader in infrastructure, asset management, and operational excellence—modernizing transportation
              networks through governance, lifecycle optimization, and data-enabled decision-making.
            </p>
            <p className="text-white/75">
              Known for pragmatic transformation that connects strategy to field execution, de-risks technology programs,
              and sustains adoption at enterprise scale.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="text-white/75">Direct pathways for advisory, speaking, and executive briefings.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <HeroCTA href="/hire#advisory-form" label="Hire Robert" variant="primary" />
              <HeroCTA href="/hire#speaking-form" label="Invite to Speak" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-white">Signature Focus Areas</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-ink-900/60 p-5 space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg">{card.icon}</span>
                  <p className="font-semibold">{card.title}</p>
                </div>
                <ul className="space-y-1 text-sm text-white/75">
                  {card.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-white">Signature Work</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {impactCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-ink-900/60 p-5 space-y-2">
                <p className="text-white font-semibold">{card.title}</p>
                <p className="text-white/75 text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-white">Speaking Topics</h2>
            <HeroCTA href="/hire#speaking-form" label="Invite Robert to Speak" variant="secondary" />
          </div>
          <div className="flex flex-wrap gap-2">
            {speakingTopics.map((topic) => (
              <span key={topic} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-white">Career Highlights</h2>
          <div className="space-y-4">
            {careerTimeline.map((item, idx) => (
              <div key={item.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span className="mt-1 h-3 w-3 rounded-full bg-accent-400" />
                  {idx !== careerTimeline.length - 1 && <span className="flex-1 w-px bg-white/10" />}
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-white break-words">{item.label}</p>
                  {item.detail && <p className="text-white/60 text-sm">{item.detail}</p>}
                  <p className="text-white/70 text-sm">{item.bullet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-white">Education & Credentials</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutContent.education.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-ink-900/60 px-3 py-2 text-sm text-white/80 break-words">
                <span className="text-accent-300">🎓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-6xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-white">What peers say</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.role} className="rounded-xl border border-white/5 bg-white/5 p-4 space-y-2">
                <p className="text-white/70">{item.quote}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-white">{item.role}</p>
              </div>
            ))}
          </div>
          <div className="text-sm text-white/60">Request references for verified testimonials.</div>
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
