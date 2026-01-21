import type { Metadata } from "next";
import { insights } from "@/content/content";
import { Hero } from "@/components/sections/hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | Robert Kumapley",
  description: "Thought leadership on enterprise asset management, data standards, and transformation.",
};

export default function InsightsPage() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Insights"
        title="Thought leadership"
        subtitle="Articles, frameworks, and POVs on enterprise asset management, data standards, and transformation."
        ctas={[{ label: "Hire Robert", href: "/services#inquiry", variant: "secondary" }]}
      />

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {insights.map((post) => (
            <div key={post.title} className="card">
              <p className="text-sm uppercase tracking-[0.2em] text-accent-200">Insight</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
              <p className="text-white/70">{post.summary}</p>
              <Link href="/contact" className="mt-3 inline-flex text-accent-200">
                Request full article
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
