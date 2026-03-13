import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

/* ── Middleware ── */
app.use(cors());
app.use(express.json());

/* ── Nodemailer transporter (Gmail SMTP) ── */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ── Health check ── */
app.get('/', (_req, res) => {
  res.json({ status: 'ok', message: 'Portfolio backend is running 🚀' });
});

/* ── Contact form endpoint ── */
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  /* Basic validation */
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📬 Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto;padding:24px;background:#f9fafb;border-radius:12px;">
          <h2 style="color:#6366f1;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
          <p style="white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Email error:', err.message);
    res.status(500).json({ error: 'Failed to send email. Check server logs.' });
  }
});

/* ── Start ── */
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
