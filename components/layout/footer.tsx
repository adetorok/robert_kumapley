import Link from "next/link";
import { brand, navLinks, resourcesContent } from "@/content/content";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950/80 py-10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-3">
          <h3 className="text-lg font-semibold text-white">{brand.fullName}</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            {brand.headline}. {brand.subheadline}
          </p>
          <p className="text-xs text-white/50">{brand.disclaimer}</p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm text-white/70 md:grid-cols-3">
          <div>
            <h4 className="mb-2 font-semibold text-white">Navigate</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-white">Resources</h4>
            <div className="space-y-2">
              {resourcesContent.featured.slice(0, 4).map((res) => (
                <a key={res.href} href={res.href} className="block hover:text-white" target="_blank" rel="noreferrer">
                  {res.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-white">Compliance</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block hover:text-white">
                Privacy Notice
              </Link>
              <Link href="/terms" className="block hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
