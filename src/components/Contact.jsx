import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    /* Clear field error on type */
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Server error');
      }
    } catch {
      /* Fallback: open mailto link so the message still gets through */
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:princek8320@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <span className="section__tag sr">// contact</span>
        <h2 className="section__title sr">
          Let's <span>Connect</span>
        </h2>

        <div className="contact__grid sr">
          {/* Left — Info */}
          <div className="contact__info">
            <h3>Reach Out.</h3>
            <p className="contact__desc">
              Have a question, want to collaborate, or just say hi? Fill out the form and I'll get back to you as soon as possible.
            </p>
            <a className="contact__link" href="mailto:princek8320@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              princek8320@gmail.com
            </a>
            <a className="contact__link" href="https://github.com/prince-kcode" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              GitHub
            </a>
            <a className="contact__link" href="https://www.linkedin.com/in/prince-kumar-engineering-student-00863b336" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V5.778a1.5 1.5 0 011.5-1.5h4.073M16.5 3.75h3.75v3.75M14.25 9.75L20.25 3.75" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Right — Form */}
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="cf-name">Your Name</label>
            <input
              id="cf-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={errors.name ? 'input--error' : ''}
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}

            <label htmlFor="cf-email">Your Email</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={errors.email ? 'input--error' : ''}
            />
            {errors.email && <span className="contact__error">{errors.email}</span>}

            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hey Prince, I'd love to work together…"
              className={errors.message ? 'input--error' : ''}
            />
            {errors.message && <span className="contact__error">{errors.message}</span>}

            <button
              type="submit"
              className="btn btn--filled"
              disabled={sending}
              style={{ alignSelf: 'flex-start' }}
            >
              {sending ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="contact__toast contact__toast--success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__toast contact__toast--error">
                ❌ Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
