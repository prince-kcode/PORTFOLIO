export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '36px 24px',
        borderTop: '1px solid var(--border)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        color: 'var(--text-muted)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      Crafted with 🧡 by{' '}
      <span style={{ color: 'var(--accent-light)' }}>Prince Kumar</span> · © {new Date().getFullYear()}
    </footer>
  );
}
