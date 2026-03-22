import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Loader2 } from "lucide-react";
import { api } from "../lib/api";

const GITHUB_URL = "https://share.google/Kw9CQ6yJ2597j1PaG";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/prince-kumar-engineering-student-00863b336";

const initial = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (status.type) setStatus({ type: null, text: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, text: "" });
    try {
      const { data } = await api.post("/api/contact", form);
      setStatus({ type: "success", text: data.message || "Message sent successfully." });
      setForm(initial);
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.message ||
        "Could not send message. Is the API running?";
      setStatus({ type: "error", text: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center sm:text-left"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Send a message through the API-backed form. Set{" "}
            <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-xs dark:bg-slate-800">
              VITE_API_URL
            </code>{" "}
            for production.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Direct</h3>
            <a
              href="mailto:princek8320@gmail.com"
              className="mt-3 block text-lg font-semibold text-sky-700 hover:underline dark:text-sky-400"
            >
              princek8320@gmail.com
            </a>
            <p className="mt-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Open to internships, collaborations, and conversations about AI/ML and web engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onSubmit={onSubmit}
            className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/50"
          >
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-inner outline-none ring-sky-500/30 focus:ring-2 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-inner outline-none ring-sky-500/30 focus:ring-2 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                className="mt-1.5 w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-inner outline-none ring-sky-500/30 focus:ring-2 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
              />
            </label>

            {status.type && (
              <p
                className={`mt-4 rounded-lg px-3 py-2 text-sm ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200"
                    : "bg-red-50 text-red-800 dark:bg-red-950/50 dark:text-red-200"
                }`}
                role="status"
              >
                {status.text}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                "Send message"
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
