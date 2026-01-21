import type { Metadata } from "next";
import { mediaContent } from "@/content/content";
import { Hero } from "@/components/sections/hero";
import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Media | Robert Kumapley",
  description: "Podcasts, presentations, and verified media links featuring Robert Kumapley.",
};

export default function MediaPage() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="Media"
        title="Media, podcasts, and appearances"
        subtitle="Selected podcasts, presentations, and symposium features."
        ctas={[{ label: "Download speaker kit", href: "/speaker-kit", variant: "secondary" }]}
      />

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-white">{mediaContent.featuredVideo.title}</h3>
          <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/U869mvJNWPo"
              title="Smarter Building Podcast Ep.15"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {mediaContent.links.slice(0, 3).map((link) => (
              <LinkButton key={link.href} href={link.href} variant="secondary" target="_blank">
                {link.title}
              </LinkButton>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {mediaContent.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              className="card block hover:border-accent-400/60"
              rel="noreferrer"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-accent-200">Verified media</p>
              <h4 className="mt-2 text-lg font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-white/60">{item.href}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
