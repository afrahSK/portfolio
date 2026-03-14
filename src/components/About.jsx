import './About.css'

const team = [
  { name: 'Krupa Patel',    role: 'Full-Stack Developer' },
  { name: 'Afrah Karatela', role: 'Full-Stack Developer'       },
]

const skills = [
  'React / Next.js', 'Vue.js', 'TypeScript', 'Node.js',
  'Express', 'MongoDB', 'Figma', 'Tailwind CSS',
  'REST APIs', 'Git / GitHub', 'Vite', 'Framer Motion',
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-inner">

        {/* Left — label + team members */}
        <div className="about-left">
          <p className="section-label">About Us</p>

          <div className="team-members">
            {team.map((m, i) => (
              <div className="member-item" key={m.name}>
                <span className="member-index">0{i + 1}</span>
                <div>
                  <h3 className="member-name">{m.name}</h3>
                  <span className="member-role">{m.role}</span>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary about-cta">
            Work With Us
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right — shared bio + skills */}
        <div className="about-right">
          <h2 className="section-title">
            A Studio Built on<br />
            <span className="about-accent">Craft & Clarity</span>
          </h2>

          <p className="about-bio">
            We're a two-person studio combining full-stack development and UI/UX design — so your
            project never loses one for the other. With 2+ years of experience building digital
            products for businesses of all sizes, we deliver work that looks great and actually performs.
          </p>
          <p className="about-bio">
            We believe in clear communication, on-time delivery, and long-term partnerships.
            When you work with us, you get more than code and pixels — you get two dedicated
            partners invested in your success.
          </p>

          <div className="skills-grid">
            {skills.map(skill => (
              <span className="skill-chip" key={skill}>{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}