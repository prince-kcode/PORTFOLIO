import React, { useState } from "react";
import { Loader2 } from "lucide-react";

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
      <div className="mx-auto max-w-2xl px-5 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Send me a message
          </h2>
          <p className="mt-3 text-slate-500">I'll get back to you as soon as possible.</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-md"
        >
          <label className="block text-sm font-medium text-slate-700">
            Name
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              autoComplete="name"
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            />
          </label>
          <label className="mt-5 block text-sm font-medium text-slate-700">
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
            />
          </label>
          <label className="mt-5 block text-sm font-medium text-slate-700">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              className="mt-1.5 w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
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
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-300/40 transition-all hover:shadow-xl hover:shadow-rose-400/50 disabled:cursor-not-allowed disabled:opacity-70"
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
    </section>
  );
};

export default Contact;
