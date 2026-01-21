import { LinkButton } from "@/components/ui/button";

type Feature = { title: string; headline: string; body: string; link: string; cta: string };

export function FeaturedMedia({ items }: { items: Feature[] }) {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.headline} className="card gradient-border space-y-3">
            <p className="text-sm uppercase tracking-[0.18em] text-accent-200">{item.title}</p>
            <h3 className="text-xl font-semibold text-white">{item.headline}</h3>
            <p className="text-white/70">{item.body}</p>
            <LinkButton href={item.link} variant="secondary">
              {item.cta}
            </LinkButton>
          </div>
        ))}
      </div>
    </section>
  );
}
