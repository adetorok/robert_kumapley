import Link from "next/link";
import type { Metadata, Route } from "next";
import { ctaLinks } from "@/content/content";

export const metadata: Metadata = {
  title: "Thanks | Robert Kumapley",
};

const messages: Record<string, string> = {
  speaking: "Your speaking inquiry is received.",
  advisory: "Your advisory inquiry is received.",
  mentorship: "Your mentorship inquiry is received.",
  "speaker-kit": "Your speaker kit request is received.",
  contact: "Your message is received.",
};

export default async function ThanksPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolved = searchParams ? await searchParams : undefined;
  const typeParam = resolved?.type;
  const type = Array.isArray(typeParam) ? typeParam[0] : typeParam ?? "contact";
  const message = messages[type] ?? messages.contact;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-soft">
        <h1 className="text-3xl font-semibold text-white">Thanks — we’ll get back to you shortly.</h1>
        <p className="mt-3 text-white/70">{message}</p>
        <p className="mt-2 text-white/60">If this is time-sensitive, please use the scheduling link.</p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={"/" as Route}
            className="rounded-full bg-accent-500 px-5 py-3 text-white hover:bg-accent-400 transition w-full sm:w-auto text-center"
          >
            Back to Home
          </Link>
          <Link
            href={(process.env.NEXT_PUBLIC_SCHEDULER_URL || ctaLinks.hire.href) as Route}
            className="rounded-full border border-white/20 px-5 py-3 text-white hover:border-accent-300 transition w-full sm:w-auto text-center"
          >
            Book a time
          </Link>
        </div>
      </div>
    </div>
  );
}
