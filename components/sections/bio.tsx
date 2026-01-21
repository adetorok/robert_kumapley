export function BioSection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-soft">
        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-lg leading-relaxed text-white/80">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
