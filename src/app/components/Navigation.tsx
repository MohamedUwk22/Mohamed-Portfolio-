interface NavigationProps {
  isScrolled: boolean;
}

export function Navigation({ isScrolled }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="tracking-tight"
          style={{ fontSize: '1.25rem', fontWeight: 600 }}
        >
          <span style={{ color: 'var(--neon-blue)' }}>&lt;</span>
          Dev
          <span style={{ color: 'var(--neon-purple)' }}>/&gt;</span>
        </button>

        <div className="flex gap-8">
          {['about', 'projects', 'experience', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize transition-colors hover:opacity-80"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
