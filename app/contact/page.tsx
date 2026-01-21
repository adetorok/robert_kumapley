import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ContactRouterForm } from "@/components/forms/router-form";
import { MultiStepForm } from "@/components/forms/multi-step";
import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact | Robert Kumapley",
  description: "Route inquiries for advisory, speaking, mentorship, and partnerships.",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Contact"
        title="Contact"
        subtitle="For speaking, advisory engagements, partnerships, or mentorship inquiries."
        ctas={[
          { label: "Scheduler", href: process.env.NEXT_PUBLIC_SCHEDULER_URL || "/hire#advisory-form", variant: "secondary" },
          { label: "Book a Talk", href: "/hire#speaking-form", variant: "ghost" },
        ]}
      />

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft lg:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Route to the right place</h3>
            <p className="text-white/70">
              Select the best path: Advisory, Speaking, Mentorship. Each route is inbox-aware for faster response.
            </p>
            <LinkButton href={process.env.NEXT_PUBLIC_SCHEDULER_URL || "#"} variant="secondary">
              {process.env.NEXT_PUBLIC_SCHEDULER_URL ? "Schedule a call" : "Add scheduler URL via env"}
            </LinkButton>
          </div>
          <div id="contact-form">
            <ContactRouterForm />
          </div>
        </div>
      </section>

      <section id="mentorship" className="px-6 pb-16">
        <div className="mx-auto max-w-6xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-white">Guided flow</h3>
          <p className="text-white/70">Prefer a quick guided path? Use the multi-step flow for routing and consent.</p>
          <MultiStepForm anchorId="contact-form" />
        </div>
      </section>
    </div>
  );
}
