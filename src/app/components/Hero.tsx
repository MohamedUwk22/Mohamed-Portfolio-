export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1 }} className="mb-6">
          Crafting Digital Experiences
          <br />
          <span style={{
            background: `linear-gradient(135deg, var(--neon-blue), var(--neon-purple))`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            That Matter
          </span>
        </h1>

        <p className="mb-12 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
          Senior Frontend Developer specializing in React, TypeScript, and modern UI/UX.
          Building scalable, accessible web applications that users love.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 rounded-lg transition-all hover:scale-105"
            style={{
              background: `linear-gradient(135deg, var(--neon-blue), var(--neon-purple))`,
              color: 'white',
              fontWeight: 600
            }}
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 rounded-lg transition-all hover:scale-105"
            style={{
              border: '2px solid var(--neon-blue)',
              color: 'var(--neon-blue)',
              fontWeight: 600
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
