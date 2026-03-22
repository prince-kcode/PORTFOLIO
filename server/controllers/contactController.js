import nodemailer from "nodemailer";

const memoryLog = [];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function postContact(req, res) {
  const { name, email, message } = req.body || {};

  const n = typeof name === "string" ? name.trim() : "";
  const e = typeof email === "string" ? email.trim() : "";
  const m = typeof message === "string" ? message.trim() : "";

  if (!n || !e || !m) {
    return res.status(400).json({ error: "All fields (name, email, message) are required." });
  }

  if (!emailRegex.test(e)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const transporter = getTransporter();

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: e,
        subject: `Portfolio message from ${n}`,
        text: `Name: ${n}\nEmail: ${e}\n\n${m}`,
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:560px;margin:auto;padding:24px;background:#f8fafc;border-radius:12px;">
            <h2 style="color:#0f172a;">New portfolio message</h2>
            <p><strong>From:</strong> ${escapeHtml(n)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(e)}">${escapeHtml(e)}</a></p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
            <p style="white-space:pre-wrap;">${escapeHtml(m)}</p>
          </div>
        `,
      });
      return res.json({ success: true, message: "Message sent successfully." });
    } catch (err) {
      console.error("Email error:", err.message);
      return res.status(500).json({ error: "Failed to send email. Check server logs." });
    }
  }

  memoryLog.push({ name: n, email: e, message: m, at: new Date().toISOString() });
  console.info(
    `[contact] stored in memory (${memoryLog.length} total). Configure EMAIL_USER / EMAIL_PASS to enable email.`
  );
  return res.json({
    success: true,
    message:
      "Message received. (Email not configured on server — your message was logged for development.)",
  });
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
