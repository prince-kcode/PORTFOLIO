# Prince Kumar — Portfolio

A modern **React + Vite** portfolio with a **PHP** backend for the contact form.

---

## 📁 Project Structure

```
PORTFOLIO/
├── public/                  Static assets
├── src/
│   ├── components/          React components (Navbar, Home, About, etc.)
│   ├── App.jsx              Root component
│   ├── App.css              App-level styles
│   ├── index.css            Global design system
│   └── main.jsx             Entry point
├── api/
│   └── contact.php          PHP mail handler for contact form
├── server/                  (Alternative) Node.js backend
├── index.html               Vite HTML entry
├── vite.config.js
└── package.json
```

---

## 🚀 Run Locally

### Prerequisites
- **Node.js ≥ 18** — [download here](https://nodejs.org/)

### 1. Install & start the frontend

```bash
cd D:\PORTFOLIO
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

### 2. Contact form backend (PHP)

The contact form uses `api/contact.php`. To test it locally:

**Option A — XAMPP / WAMP (recommended for PHP)**
1. Install [XAMPP](https://www.apachefriends.org/) or [WAMP](https://www.wampserver.com/)
2. Copy the `api/` folder into `C:\xampp\htdocs\api\`
3. Start Apache from the XAMPP control panel
4. The form will POST to `http://localhost/api/contact.php`

**Option B — PHP built-in server**
```bash
cd D:\PORTFOLIO
php -S localhost:8000
```

Then set `VITE_API_URL=http://localhost:8000` in a `.env` file.

> 💡 If the PHP backend isn't available, the form automatically falls back to a `mailto:` link.

---

## 🌐 Deploy Online

### Frontend → GitHub Pages

```bash
# Build production bundle
npm run build

# Install gh-pages helper
npm install --save-dev gh-pages

# Add to package.json scripts: "deploy": "gh-pages -d dist"
npx gh-pages -d dist
```

Your site will be at: `https://YOUR_USERNAME.github.io/portfolio/`

### Contact Form Backend → PHP Hosting

Upload `api/contact.php` to any PHP-enabled hosting:
- **Shared hosting** (Hostinger, GoDaddy, Bluehost) — upload via cPanel File Manager
- **InfinityFree** — free PHP hosting
- **000webhost** — free PHP hosting

Then update your React `.env`:
```
VITE_API_URL=https://your-hosting-domain.com
```

Rebuild and redeploy: `npm run build && npx gh-pages -d dist`

---

## 🛠️ Tech Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | React 18, Vite, CSS           |
| Backend   | PHP (mail function)           |
| Fonts     | Syne, Space Mono (Google)     |
| Hosting   | GitHub Pages + PHP Hosting    |
