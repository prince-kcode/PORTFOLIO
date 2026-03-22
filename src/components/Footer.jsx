import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()} Prince Kumar · Built with React & Passion.
      </p>
    </footer>
  );
};

export default Footer;
