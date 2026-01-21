import Link from "next/link";
import { navLinks, ctaLinks, brand } from "@/content/content";
import { Logo } from "@/components/logo";
import { LinkButton } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0b1020]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white">
          <Logo className="w-9 h-9" />
          <div className="leading-tight">
            <div>{brand.fullName}</div>
            <div className="text-white/60 text-xs">{brand.headline}</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-white/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <LinkButton variant="secondary" size="sm" href={ctaLinks.bookTalk.href}>
            {ctaLinks.bookTalk.label}
          </LinkButton>
          <LinkButton variant="primary" size="sm" href={ctaLinks.hire.href}>
            {ctaLinks.hire.label}
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
