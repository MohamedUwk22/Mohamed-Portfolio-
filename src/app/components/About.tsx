import { Code2, Database, Layout, Zap } from 'lucide-react';

export function About() {
  const techStack = [
    { name: 'React', icon: Code2, color: 'var(--neon-blue)' },
    { name: 'TypeScript', icon: Code2, color: 'var(--neon-purple)' },
    { name: 'Next.js', icon: Layout, color: 'var(--neon-blue)' },
    { name: 'Tailwind CSS', icon: Zap, color: 'var(--neon-purple)' },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 style={{ fontSize: '3rem', fontWeight: 700 }} className="mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--muted-foreground)' }} className="mb-6">
              I'm a passionate frontend developer with 8+ years of experience building modern web applications.
              My focus is on creating performant, accessible, and visually stunning user interfaces that deliver
              exceptional user experiences.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--muted-foreground)' }}>
              I specialize in the React ecosystem and love working with cutting-edge technologies to solve
              complex problems with elegant solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-8" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="p-6 rounded-lg border border-border transition-all hover:scale-105"
                    style={{ background: 'var(--card)' }}
                  >
                    <Icon size={32} style={{ color: tech.color }} className="mb-3" />
                    <p style={{ fontWeight: 600 }}>{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
