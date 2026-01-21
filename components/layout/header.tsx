"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { ctaLinks, brand } from "@/content/content";
import { Logo } from "@/components/logo";
import { LinkButton } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
        document.removeEventListener("keydown", onKey);
      };
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0b1020]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white">
          <Logo className="w-9 h-9" />
          <div className="leading-tight">
            <div>{brand.fullName}</div>
            <div className="text-white/60 text-xs">{brand.headline}</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-white/80 md:flex">
          <div className="relative">
            <button
              className="flex items-center gap-1 text-white/80 hover:text-white"
              onMouseEnter={() => setOpenWork(true)}
              onMouseLeave={() => setOpenWork(false)}
              aria-expanded={openWork}
            >
              Work With Robert
            </button>
            {openWork && (
              <div
                className="absolute left-0 mt-2 w-52 rounded-xl border border-white/10 bg-[#0b1020]/95 p-3 shadow-soft"
                onMouseEnter={() => setOpenWork(true)}
                onMouseLeave={() => setOpenWork(false)}
              >
                {[
                  { label: "Advisory", href: "/hire?type=advisory" },
                  { label: "Speaking / Talks", href: "/hire?type=speaking" },
                  { label: "Mentorship", href: "/hire?type=mentorship" },
                  { label: "Workshops", href: "/hire?type=workshop" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 hover:bg-white/10 text-white/80 hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <div className="relative">
            <button
              className="flex items-center gap-1 text-white/80 hover:text-white"
              onMouseEnter={() => setOpenMore(true)}
              onMouseLeave={() => setOpenMore(false)}
              aria-expanded={openMore}
            >
              More
            </button>
            {openMore && (
              <div
                className="absolute left-0 mt-2 w-56 rounded-xl border border-white/10 bg-[#0b1020]/95 p-3 shadow-soft"
                onMouseEnter={() => setOpenMore(true)}
                onMouseLeave={() => setOpenMore(false)}
              >
                {[
                  { label: "Case Highlights", href: "/case-highlights" },
                  { label: "Media", href: "/media" },
                  { label: "Resources", href: "/resources" },
                  { label: "Insights", href: "/insights" },
                  { label: "MYGOAL", href: "/mygoal" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 hover:bg-white/10 text-white/80 hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <LinkButton variant="secondary" size="sm" href={ctaLinks.bookTalk.href}>
            {ctaLinks.bookTalk.label}
          </LinkButton>
          <LinkButton variant="primary" size="sm" href={ctaLinks.hire.href}>
            {ctaLinks.hire.label}
          </LinkButton>
        </div>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-40 bg-[#0b1020]/95 backdrop-blur-sm px-4 pt-4"
          role="dialog"
        >
          <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-white font-semibold">{brand.fullName}</div>
              <button
                className="h-10 w-10 rounded-lg border border-white/10 text-white"
                onClick={close}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="grid gap-4 text-white/80">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Work With Robert</p>
                {[
                  { label: "Advisory", href: "/hire?type=advisory" },
                  { label: "Speaking / Talks", href: "/hire?type=speaking" },
                  { label: "Mentorship", href: "/hire?type=mentorship" },
                  { label: "Workshops", href: "/hire?type=workshop" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 hover:bg-white/10"
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">More</p>
                {[
                  { label: "Case Highlights", href: "/case-highlights" },
                  { label: "Media", href: "/media" },
                  { label: "Resources", href: "/resources" },
                  { label: "Insights", href: "/insights" },
                  { label: "MYGOAL", href: "/mygoal" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 hover:bg-white/10"
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Primary</p>
                <Link href="/about" className="block rounded-lg px-3 py-2 hover:bg-white/10" onClick={close}>
                  About
                </Link>
                <Link href="/contact" className="block rounded-lg px-3 py-2 hover:bg-white/10" onClick={close}>
                  Contact
                </Link>
              </div>
            </div>
            <div className="grid gap-3">
              <LinkButton href="/hire" variant="primary" className="w-full">
                Work With Robert
              </LinkButton>
              <LinkButton href="/hire?type=speaking" variant="secondary" className="w-full">
                Book a Call
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
