import './Services.css'

const services = [
  {
    icon: '🌐',
    title: 'Business Website Development',
    desc: 'Professional, fast-loading business websites built with modern tech. SEO-optimized and mobile-first from day one.',
    tags: ['React', 'Next.js', 'CMS'],
  },
  {
    icon: '🎯',
    title: 'Landing Page Design & Dev',
    desc: 'High-converting landing pages crafted to turn visitors into customers. A/B-test ready and pixel-perfect.',
    tags: ['Conversion', 'Speed', 'Analytics'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design (Figma)',
    desc: 'End-to-end design from wireframes to polished Figma mockups with interactive prototypes and design systems.',
    tags: ['Figma', 'Prototypes', 'Design System'],
  },
  {
    icon: '⚡',
    title: 'Frontend Development',
    desc: 'Bringing your existing projects to life with clean, maintainable, performant frontend code.',
    tags: ['React', 'Vue', 'TypeScript'],
  },
  {
    icon: '🔄',
    title: 'Figma to Code',
    desc: 'Pixel-perfect conversion of your Figma designs to production-ready, responsive code — faithfully.',
    tags: ['Pixel-perfect', 'Responsive', 'Fast'],
  },
  {
    icon: '🔌',
    title: 'REST API Development',
    desc: 'Robust, scalable REST APIs with proper authentication, documentation, and error handling.',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    icon: '🛠️',
    title: 'Website Maintenance',
    desc: 'Ongoing support, updates, bug fixes and performance monitoring so your site stays healthy.',
    tags: ['Support', 'Updates', 'Monitoring'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <p className="section-label">What I Do</p>
        <div className="services-header">
          <h2 className="section-title">Core Services</h2>
          <p className="section-subtitle">
            From idea to deployment — everything you need to launch and grow your digital presence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={s.title} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}