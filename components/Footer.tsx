export function Footer() {
  return (
    <footer
      className="mt-24 pt-6 text-sm"
      style={{
        borderTop: "1px solid var(--color-line)",
        color: "var(--color-ink-muted)",
      }}
    >
      <div className="flex flex-wrap justify-between gap-4">
        <span>© {new Date().getFullYear()} 海峰</span>
        <span className="flex gap-4">
          <a href="/feed.xml">RSS</a>
        </span>
      </div>
    </footer>
  );
}
