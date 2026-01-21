import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-left text-white font-semibold"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="text-white/60">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pb-4 pt-1 text-white/80">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
