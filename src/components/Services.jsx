import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Business Website Development',
    desc: 'Professional, fast-loading business websites built with modern tech. SEO-optimized and mobile-first from day one.',
    tags: ['React', 'Next.js', 'CMS'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Landing Page Design & Dev',
    desc: 'High-converting landing pages crafted to turn visitors into customers. A/B-test ready and pixel-perfect.',
    tags: ['Conversion', 'Speed', 'Analytics'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="8" height="10" rx="1"/><rect x="13" y="3" width="8" height="6" rx="1"/>
        <rect x="13" y="13" width="8" height="8" rx="1"/><rect x="3" y="17" width="8" height="4" rx="1"/>
      </svg>
    ),
    title: 'UI/UX Design (Figma)',
    desc: 'End-to-end design from wireframes to polished Figma mockups with interactive prototypes and design systems.',
    tags: ['Figma', 'Prototypes', 'Design System'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Frontend Development',
    desc: 'Bringing your existing projects to life with clean, maintainable, performant frontend code.',
    tags: ['React', 'Vue', 'TypeScript'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Figma to Code',
    desc: 'Pixel-perfect conversion of your Figma designs to production-ready, responsive code — faithfully.',
    tags: ['Pixel-perfect', 'Responsive', 'Fast'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
    title: 'REST API Development',
    desc: 'Robust, scalable REST APIs with proper authentication, documentation, and error handling.',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Website Maintenance',
    desc: 'Ongoing support, updates, bug fixes and performance monitoring so your site stays healthy.',
    tags: ['Support', 'Updates', 'Monitoring'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">

        <div className="services-header">
          <div className="services-header-left">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Core Services</h2>
          </div>
          <p className="section-subtitle">
            From idea to deployment — everything you need to launch and grow your digital presence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={s.title} style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="service-top">
                <div className="service-icon">{s.icon}</div>
                <span className="service-index">0{i + 1}</span>
              </div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              
            </div>
          ))}

          {/* Decorative last cell */}
          <div className="services-cta-cell">
            <p>Have a project in mind?</p>
            <a href="#contact" className="btn-primary">
              Let's Talk
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}