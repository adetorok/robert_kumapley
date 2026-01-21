import { Hero } from "@/components/sections/hero";

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <Hero
        eyebrow="Terms"
        title="Terms of Use"
        subtitle="Informational site only. Engagements are subject to formal agreements."
        ctas={[{ label: "Contact", href: "/contact", variant: "secondary" }]}
      />
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft prose-dark">
          <p>
            This site is for informational purposes and does not constitute professional advice or a solicitation where
            prohibited. Engagements proceed only after mutual execution of a statement of work or agreement.
          </p>
          <p>
            External links are provided for convenience; they are maintained by their respective owners. Use at your own
            discretion. All trademarks belong to their respective holders.
          </p>
        </div>
      </section>
    </div>
  );
}
