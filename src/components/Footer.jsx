import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/10">
      <p className="text-[#a1a1aa] text-sm">
        © {new Date().getFullYear()} Prince Kumar. Built with React & Vite.
      </p>
    </footer>
  );
};

export default Footer;
