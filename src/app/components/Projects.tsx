import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with Next.js 14, Stripe payments, and real-time inventory',
      image: 'https://images.unsplash.com/photo-1759884247173-3db27f7fafef?w=800',
      tags: ['React', 'Next.js', 'TypeScript', 'Stripe'],
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform built with React and D3.js',
      image: 'https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?w=800',
      tags: ['React', 'D3.js', 'TailwindCSS'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with drag-and-drop interface',
      image: 'https://images.unsplash.com/photo-1777861845854-4f35ab170680?w=800',
      tags: ['React', 'TypeScript', 'Firebase'],
      link: '#'
    },
  ];

  return (
    <section id="projects" className="py-32 px-6" style={{ background: 'var(--card)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 style={{ fontSize: '3rem', fontWeight: 700 }} className="mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-border transition-all hover:border-opacity-50"
              style={{
                background: 'var(--background)',
                borderColor: hoveredIndex === index ? 'var(--neon-blue)' : 'var(--border)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {project.title}
                </h3>
                <p className="mb-4" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full"
                      style={{
                        background: 'var(--muted)',
                        fontSize: '0.75rem',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{ color: 'var(--neon-blue)' }}
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
