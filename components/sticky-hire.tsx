import { ctaLinks } from "@/content/content";
import { LinkButton } from "@/components/ui/button";

export function StickyHire() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden md:block">
      <div className="rounded-full bg-ink-900/90 p-1 shadow-xl shadow-accent-500/20 backdrop-blur">
        <LinkButton href={ctaLinks.hire.href} variant="primary" size="lg">
          {ctaLinks.hire.label}
        </LinkButton>
      </div>
    </div>
  );
}
