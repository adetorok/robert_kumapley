"use client";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  description?: string;
  ctas: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" | "subtle" | string }[];
  credibility?: string;
};

export function Hero({ eyebrow, title, subtitle, description, ctas, credibility }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {eyebrow && <p className="text-accent-200 text-sm font-semibold uppercase tracking-[0.2em]">{eyebrow}</p>}
          <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">{title}</h1>
          <p className="text-xl text-white/80 md:text-2xl">{subtitle}</p>
          {description && <p className="max-w-3xl text-lg text-white/70">{description}</p>}
          <div className="flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <LinkButton
                key={cta.href}
                href={cta.href}
                variant={cta.variant ?? "primary"}
                size="lg"
                className="w-full sm:w-auto"
              >
                {cta.label}
              </LinkButton>
            ))}
          </div>
          {credibility && (
            <div className="mt-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              {credibility}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
