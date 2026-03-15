import './Portfolio.css'
import quill from '../assets/quill.png'
import forge from '../assets/forge.png'
import maison from '../assets/maison.png'
import blink from '../assets/blink.png'

const projects = [
  {
    title: 'Quill AI',
    category: 'AI / SaaS',
    desc: 'An AI-powered content writing platform that helps creators and marketers generate high-quality copy in seconds. Built with a clean editor experience and real-time generation.',
    tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    live: '#',
    github: '#',
    image: quill,
    placeholder: 'QA',
  },
  {
    title: 'Fitness Studio',
    category: 'Business Website',
    desc: 'A modern, conversion-focused website for a fitness studio. Features class schedules, trainer profiles, membership tiers, and a booking flow.',
    tags: ['Next.js', 'Tailwind CSS', 'React.js'],
    live: '#',
    github: '#',
    image: forge,
    placeholder: 'FS',
  },
  {
    title: 'Maison Interior Studio',
    category: 'Business Website',
    desc: 'A luxury interior design studio website with an editorial layout, project gallery, and inquiry form. Focused on brand storytelling and visual impact.',
    tags: ['React', 'GSAP', 'Figma', 'CSS'],
    live: '#',
    github: '#',
    image: maison,       
    placeholder: 'MI',
  },
  {
    title: 'Full Stack Grocery Ecommerce',
    category: 'E-Commerce',
    desc: 'A full-stack instant grocery delivery app clone. Includes product listings, cart management, user auth, and order tracking — built as a learning project.',
    tags: ['React', 'Express', 'MongoDB', 'Redux', 'kafka'],
    live: '#',
    github: '#',
    image: blink,      
    placeholder: 'BK',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">

        <div className="portfolio-header">
          <div>
            <p className="section-label">Our Work</p>
            <h2 className="section-title">Selected Projects</h2>
          </div>
          <p className="section-subtitle">
            A mix of client work and passion projects — each built with attention to craft, performance, and purpose.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={p.title} style={{ animationDelay: `${i * 0.08}s` }}>

              {/* Preview — no badge here anymore */}
              <div className="project-preview">
                {p.image
                  ? <img src={p.image} alt={p.title} />
                  : (
                    <div className="preview-placeholder">
                      <span>{p.placeholder}</span>
                    </div>
                  )
                }
              </div>

              {/* Content — badge sits above title */}
              <div className="project-content">
                <span className="project-category">{p.category}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link project-link-live">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Site
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link project-link-github">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}