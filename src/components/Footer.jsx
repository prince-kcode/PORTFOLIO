import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/90 py-10 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <p>
        © {new Date().getFullYear()} Prince Kumar · React · Express · Built for production.
      </p>
    </footer>
  );
};

export default Footer;
