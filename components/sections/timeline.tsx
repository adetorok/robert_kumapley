type Item = { label: string; detail?: string };

export function Timeline({ items, title }: { items: string[] | Item[]; title?: string }) {
  const normalized = items.map((item) => (typeof item === "string" ? { label: item } : item));
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
        {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
        <div className="space-y-4">
          {normalized.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="mt-1 h-3 w-3 rounded-full bg-accent-400" aria-hidden />
              <div>
                <p className="font-semibold text-white">{item.label}</p>
                {item.detail && <p className="text-white/70">{item.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
