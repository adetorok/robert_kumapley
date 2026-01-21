import { formatList } from "@/lib/utils";

export function TopicsList({ topics, title }: { topics: string[]; title?: string }) {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
        {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
        <ul className="grid gap-3 sm:grid-cols-2">
          {topics.map((topic) => (
            <li key={topic} className="rounded-lg border border-white/5 bg-white/2 p-3 text-white/80">
              {topic}
            </li>
          ))}
        </ul>
        <p className="text-sm text-white/50">Focus areas: {formatList(topics)}</p>
      </div>
    </section>
  );
}
