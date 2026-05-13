export function Experience() {
  const experiences = [
    {
      company: 'Junior Frontend Developer & UI Specialist',
      role: 'Freelancer upwork',
      period: '2024 – Present',
      achievements: [
        'eveloped high-quality web interfaces using React.js and SCSS, ensuring fully responsive designs for various client projects',
      'Built and deployed a full-scale E-commerce platform with dynamic filtering and a seamless shopping cart experienc'      ]
    },
    {
      company: 'Route Frontend Devoloper',
      role: 'Frontend Developer',
      period: '2021 - 2022',
      achievements: [
        'Built responsive web applications serving 500K+ users',
        'Reduced bundle size by 60% through code-splitting',
        'Bridges the gap between design and code, ensuring that the visual interface is implemented exactly as designed in tools like Figma.'
      ]
    },
    {
      company: 'Khamsat Freelancer',
      role: 'Frontend Developer',
      period: '2023 - 2024',
      achievements: [
        'Developed customer-facing dashboards with React',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Contributed to open-source React component library'
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 style={{ fontSize: '3rem', fontWeight: 700 }} className="mb-16 text-center">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5"
            style={{ background: `linear-gradient(180deg, var(--neon-blue), var(--neon-purple))` }}
          />

          <div className="space-y-12 pl-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-12 top-2 w-4 h-4 rounded-full"
                  style={{ background: index % 2 === 0 ? 'var(--neon-blue)' : 'var(--neon-purple)' }}
                />

                <div className="p-6 rounded-lg border border-border" style={{ background: 'var(--card)' }}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }} className="mb-1">
                        {exp.role}
                      </h3>
                      <p style={{ color: 'var(--neon-blue)', fontWeight: 600 }}>
                        {exp.company}
                      </p>
                    </div>
                    <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2"
                        style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}
                      >
                        <span style={{ color: 'var(--neon-purple)' }}>▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
