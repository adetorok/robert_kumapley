import { Hero } from "@/components/sections/hero";

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <Hero
        eyebrow="Privacy"
        title="Privacy Notice"
        subtitle="We keep submissions limited to routing and follow-up. Avoid sharing sensitive or confidential data."
        ctas={[{ label: "Contact", href: "/contact", variant: "secondary" }]}
      />
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft prose-dark">
          <p>
            Data you submit through forms is used to respond to your inquiry and may be routed to the appropriate email
            inbox based on your selected intent (speaking, advisory, mentorship, or other). Optional Zapier forwarding
            is controlled through environment variables.
          </p>
          <p>
            We do not sell data. You may request removal by emailing the inbox you contacted. Do not include protected,
            confidential, or regulated information in submissions.
          </p>
        </div>
      </section>
    </div>
  );
}
