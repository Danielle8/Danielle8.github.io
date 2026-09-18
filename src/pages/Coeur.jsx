import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import './ProjectDetail.css'

const Coeur = () => {
  return (
    <div className="project-detail-page">
      <Link to="/projects" className="project-detail-back">← Back to Projects</Link>

      <div className="project-detail-header">
        <h1 className="project-detail-title">Coeur</h1>

        <div className="project-detail-meta">
          <div className="meta-item">
            <h3 className="meta-label">Project Scope</h3>
            <p className="meta-value">Live E-Commerce Website</p>
          </div>
          <div className="meta-item">
            <h3 className="meta-label">Role:</h3>
            <p className="meta-value">UI Implementation (Front-End Development)</p>
          </div>
          <div className="meta-item">
            <h3 className="meta-label">Tools Used:</h3>
            <p className="meta-value">HTML, CSS, JavaScript</p>
          </div>
        </div>
      </div>

      <a
        href="https://coeurleather.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="prototype-btn"
      >
        Visit Site
      </a>

      <div className="project-detail-placeholder"></div>

      <div className="project-detail-body">
        <section id="background" className="project-section">
          <h2 className="section-heading">Background</h2>
          <p className="section-text">
            Coeur is a luxury leather goods brand specializing in handbags and totes, built around
            the idea of "American Heritage Meets Responsible Luxury." Every piece is fully traceable
            and thoughtfully made, with an emphasis on vegetable-tanned leather, ethical sourcing, and
            transparency around material origins and care. I implemented the front-end UI for the
            Coeur website, bringing the brand's refined, heritage-driven aesthetic to life in a
            responsive, production-ready site.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Coeur
