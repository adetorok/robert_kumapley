import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { MultiStepForm } from "@/components/forms/multi-step";
import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hire Robert | Inquiry flow",
  description: "Guided multi-step inquiry for advisory, speaking, mentorship, and workshops.",
};

export default function HirePage() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Hire Robert"
        title="Hire Robert"
        subtitle="Multi-step inquiry with routing for advisory, speaking, mentorship, and workshops."
        ctas={[
          { label: "Start inquiry", href: "#advisory-form", variant: "primary" },
          { label: "Book a Talk", href: "#speaking-form", variant: "secondary" },
        ]}
      />

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft lg:grid-cols-2">
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <div id="advisory-form" />
              <div id="speaking-form" />
              <div id="mentorship-form" />
            </div>
            <h3 className="text-xl font-semibold text-white">Clear routing</h3>
            <p className="text-white/70">
              The form routes to speaking, advisory, mentorship, or default inboxes based on your selection.
            </p>
            <LinkButton href={process.env.NEXT_PUBLIC_SCHEDULER_URL || "/contact"} variant="secondary" className="w-full sm:w-auto">
              {process.env.NEXT_PUBLIC_SCHEDULER_URL ? "Schedule a call" : "Add scheduler URL via env"}
            </LinkButton>
          </div>
          <MultiStepForm anchorId="advisory-form" />
        </div>
      </section>
    </div>
  );
}
