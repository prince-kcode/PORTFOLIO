import React, { useState } from "react";
import { Github, Linkedin, Loader2 } from "lucide-react";
import { api } from "../lib/api";

const GITHUB_URL = "https://github.com/prince-kcode";
const LINKEDIN_URL = "https://www.linkedin.com/in/prince-kumar-00863b336";

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
      const msg = err.response?.data?.error || err.message || "Could not send message. Is the API running?";
      setStatus({ type: "error", text: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 text-center sm:text-left">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get in touch
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-xl font-semibold text-white">Direct Connect</h3>
            <a
              href="mailto:princek8320@gmail.com"
              className="mt-3 block text-lg font-medium text-slate-300 hover:text-white transition-colors"
            >
              princek8320@gmail.com
            </a>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Open to internships, collaborations, and conversations about AI/ML and software engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#1e293b]/50 px-4 py-2.5 text-sm font-semibold text-slate-300 shadow-sm transition hover:bg-slate-700 hover:text-white"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#1e293b]/50 px-4 py-2.5 text-sm font-semibold text-slate-300 shadow-sm transition hover:bg-slate-700 hover:text-white"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-slate-800 bg-[#1e293b]/30 p-6 shadow-sm"
          >
            <label className="block text-sm font-medium text-slate-300">
              Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-md border border-slate-700 bg-[#0f172a] px-3 py-2.5 text-white shadow-inner outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-300">
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
                className="mt-1.5 w-full rounded-md border border-slate-700 bg-[#0f172a] px-3 py-2.5 text-white shadow-inner outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-300">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                className="mt-1.5 w-full resize-y rounded-md border border-slate-700 bg-[#0f172a] px-3 py-2.5 text-white shadow-inner outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              />
            </label>

            {status.type && (
              <p
                className={`mt-4 rounded-md px-3 py-2 text-sm ${
                  status.type === "success"
                    ? "bg-emerald-900/30 text-emerald-400 border border-emerald-800"
                    : "bg-red-900/30 text-red-400 border border-red-800"
                }`}
                role="status"
              >
                {status.text}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                "Send message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
