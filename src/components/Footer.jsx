import './Footer.css'
import logo from '../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <img src={logo} alt="Web Dev Studio" />
          </a>
          <p>Building fast, beautiful web experiences for businesses worldwide.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <p className="footer-col-title">Services</p>
            <ul>
              {[
                'Business Websites',
                'Landing Pages',
                'UI/UX Design',
                'Frontend Dev',
                'Figma to Code',
                'REST APIs',
                'Maintenance',
              ].map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Connect</p>
            <ul>
              <li><a href="https://github.com"   target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com"  target="_blank" rel="noreferrer">Twitter / X</a></li>
              <li><a href="https://fiverr.com"   target="_blank" rel="noreferrer">Fiverr</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {year} WebDev Studio. All rights reserved.</p>
          <p>Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}