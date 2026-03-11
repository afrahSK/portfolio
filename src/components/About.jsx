import './About.css'

const skills = [
  'React / Next.js', 'Vue.js', 'TypeScript', 'Node.js',
  'Express', 'MongoDB', 'Figma', 'Tailwind CSS',
  'REST APIs', 'Git / GitHub', 'Vite', 'Framer Motion'
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-inner">
        <div className="about-left">
          <div className="about-img-wrapper">
            <div className="about-img-placeholder">
              <span>Your Photo</span>
            </div>
            <div className="about-accent-ring"></div>
          </div>
        </div>

        <div className="about-right">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Freelancer Who<br />Cares About Results
          </h2>
          <p className="about-bio">
            Hi! I'm a freelance developer & designer with 2+ years of experience building
            digital products for businesses of all sizes. I combine technical skills with
            an eye for design to deliver work that not only looks great — but actually
            performs.
          </p>
          <p className="about-bio">
            I believe in clear communication, on-time delivery, and long-term partnerships.
            When you work with me, you get more than just code — you get a dedicated partner
            invested in your success.
          </p>

          <div className="skills-grid">
            {skills.map(skill => (
              <span className="skill-chip" key={skill}>{skill}</span>
            ))}
          </div>

          <a href="#contact" className="btn-primary" style={{ marginTop: '32px' }}>
            Work With Me →
          </a>
        </div>
      </div>
    </section>
  )
}