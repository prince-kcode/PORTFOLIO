import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '40px 0',
      borderTop: '1px solid var(--card-border)',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Prince Kumar. Built with React & Vite.</p>
        <p style={{ marginTop: '8px', fontSize: '0.8rem', opacity: 0.6 }}>
          Designed for simplicity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
