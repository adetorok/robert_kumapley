"use client";
import { motion } from "framer-motion";

type Card = { title: string; body: string };

export function CardGrid({ cards, columns = 3 }: { cards: Card[]; columns?: 2 | 3 }) {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-6" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            className="card gradient-border"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-white/70">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
