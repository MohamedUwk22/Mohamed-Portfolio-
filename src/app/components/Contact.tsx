import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socials = [
    { name: 'GitHub', icon: Github, link: 'https://github.com', color: 'var(--neon-blue)' },
    { name: 'LinkedIn', icon: Linkedin, link: 'https://linkedin.com', color: 'var(--neon-blue)' },
    { name: 'Email', icon: Mail, link: 'mailto:hello@developer.com', color: 'var(--neon-purple)' }
  ];

  return (
    <section id="contact" className="py-32 px-6" style={{ background: 'var(--card)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 style={{ fontSize: '3rem', fontWeight: 700 }} className="mb-4 text-center">
          Let's Work Together
        </h2>
        <p className="text-center mb-12" style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>
          Have a project in mind? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2" style={{ color: 'var(--foreground)' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-opacity-50 transition-colors"
                style={{
                  background: 'var(--background)',
                  color: 'var(--foreground)',
                  borderColor: 'var(--border)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--neon-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2" style={{ color: 'var(--foreground)' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-opacity-50 transition-colors"
                style={{
                  background: 'var(--background)',
                  color: 'var(--foreground)',
                  borderColor: 'var(--border)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--neon-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2" style={{ color: 'var(--foreground)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-opacity-50 transition-colors resize-none"
                style={{
                  background: 'var(--background)',
                  color: 'var(--foreground)',
                  borderColor: 'var(--border)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--neon-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{
                background: `linear-gradient(135deg, var(--neon-blue), var(--neon-purple))`,
                color: 'white',
                fontWeight: 600
              }}
            >
              Send Message
              <Send size={18} />
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Connect With Me
            </h3>
            <div className="space-y-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border transition-all hover:scale-105"
                    style={{ background: 'var(--background)' }}
                  >
                    <Icon size={24} style={{ color: social.color }} />
                    <span style={{ fontWeight: 600 }}>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
          <p>&copy; 2026 Frontend Developer Portfolio. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}
