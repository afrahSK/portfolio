import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="container hero-inner">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for freelance work
        </div>

        <h1 className="hero-title">
          I Build <span className="accent-text">Digital Experiences</span>{' '}
          That Convert
        </h1>

        <p className="hero-subtitle">
          Full-stack freelancer specializing in business websites, landing pages,
          UI/UX design & REST APIs. I turn your vision into fast, beautiful,
          revenue-generating products.
        </p>

        <div className="hero-actions">
          <a href="#services" className="btn-primary">
            Explore Services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">Let's Talk</a>
        </div>

        <div className="hero-stats">
          {[
            { value: '30+', label: 'Projects Delivered' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '2+', label: 'Years Experience' },
          ].map(stat => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}