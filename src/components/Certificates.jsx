import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const base = import.meta.env.BASE_URL || "/";

const items = [
  { id: "1", src: `${base}certificates/cert-1.svg`, title: "Web Foundations" },
  { id: "2", src: `${base}certificates/cert-2.svg`, title: "JavaScript Essentials" },
  { id: "3", src: `${base}certificates/cert-3.svg`, title: "Git & Collaboration" },
];

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center sm:text-left"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            certificates
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Credentials
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Select a thumbnail to preview. Replace these assets in{" "}
            <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-xs dark:bg-slate-800">
              public/certificates/
            </code>{" "}
            with your real certificates anytime.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((c, i) => (
            <motion.button
              key={c.id}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onClick={() => setActive(c)}
              className="group overflow-hidden rounded-xl border border-slate-200/90 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/40"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={c.src}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{c.title}</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Click to enlarge</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-white transition hover:bg-slate-900 dark:bg-white/90 dark:text-slate-900"
                onClick={() => setActive(null)}
                aria-label="Close preview"
              >
                <X className="h-4 w-4" />
              </button>
              <img
                src={active.src}
                alt={active.title}
                className="max-h-[85vh] w-full object-contain"
              />
              <p className="border-t border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
                {active.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
