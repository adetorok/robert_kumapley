"use client";
import { motion } from "framer-motion";

type Card = { title: string; body: string };

export function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            className="card gradient-border"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-white/70 break-words">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
