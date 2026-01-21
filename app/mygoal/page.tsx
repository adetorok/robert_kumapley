import type { Metadata } from "next";
import { nonprofitContent } from "@/content/content";
import { Hero } from "@/components/sections/hero";
import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "MYGOAL & Haven International | Robert Kumapley",
  description: "Nonprofit spotlight supporting families affected by autism and inclusive education initiatives.",
};

export default function MyGoalPage() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Nonprofit"
        title={nonprofitContent.mygoal.title}
        subtitle={nonprofitContent.mygoal.subtitle}
        ctas={[
          { label: "Visit MYGOAL", href: nonprofitContent.mygoal.ctas[0].href, variant: "primary" },
          { label: "Donate / Support", href: nonprofitContent.mygoal.ctas[1].href, variant: "secondary" },
        ]}
      />

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <p className="text-lg text-white/80">{nonprofitContent.mygoal.body}</p>
          <div className="flex flex-wrap gap-3">
            {nonprofitContent.mygoal.ctas.map((cta) => (
              <LinkButton key={cta.href} href={cta.href} variant="secondary">
                {cta.label}
              </LinkButton>
            ))}
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {nonprofitContent.mygoal.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-ink-900/60 p-4 text-white/80"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-white">{nonprofitContent.haven.title}</h3>
          <p className="text-white/75">{nonprofitContent.haven.body}</p>
          <div className="flex flex-wrap gap-3">
            {nonprofitContent.haven.links.map((link) => (
              <LinkButton key={link.href} href={link.href} variant="secondary">
                {link.label}
              </LinkButton>
            ))}
          </div>
          <div className="text-sm text-white/60">
            <a href={nonprofitContent.other[0].href} target="_blank" rel="noreferrer" className="underline">
              {nonprofitContent.other[0].label}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
