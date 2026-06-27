export default function QuickNav({ items }) {
  return (
    <nav className="quick-nav" aria-label="Quick navigation">
      <div className="quick-nav-scroll">
        {items.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
