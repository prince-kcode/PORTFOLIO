import React, { useState } from "react";
import { Github, Linkedin, Loader2 } from "lucide-react";

const GITHUB_URL = "https://github.com/prince-kcode";
const LINKEDIN_URL = "https://www.linkedin.com/in/prince-kumar-00863b336";
const WEB3FORMS_KEY = "97862d99-34e7-411f-be7a-cde8bc10b34a";

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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", text: "Message sent successfully!" });
        setForm(initial);
      } else {
        setStatus({ type: "error", text: data.message || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-[var(--nav-h)] py-20 sm:py-24 bg-white/60">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Get in touch
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Direct Connect</h3>
            <a
              href="mailto:princek8320@gmail.com"
              className="mt-3 block text-lg font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              princek8320@gmail.com
            </a>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              Open to internships, collaborations, and conversations about AI/ML and software engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:shadow-md hover:text-indigo-600"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:shadow-md hover:text-indigo-600"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm"
          >
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
            <label className="block text-sm font-medium text-slate-700">
              Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-700">
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-700">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                className="mt-1.5 w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </label>

            {status.type && (
              <p
                className={`mt-4 rounded-lg px-3 py-2 text-sm ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
                role="status"
              >
                {status.text}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300/40 transition-all hover:shadow-xl hover:shadow-indigo-400/50 disabled:cursor-not-allowed disabled:opacity-70"
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
