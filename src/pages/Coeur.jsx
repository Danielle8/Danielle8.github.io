import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import coeurHomepage from '../assets/projects/coeur-homepage.jpg'
import coeurPreview from '../assets/projects/coeur-preview.mp4'
import coeurPoster from '../assets/projects/coeur-poster.jpg'
import coeurProductPage from '../assets/projects/coeur-product-page.jpg'
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

      <img
        src={coeurHomepage}
        alt="Coeur homepage hero section"
        className="project-detail-placeholder project-detail-image"
      />

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

        <section id="homepage-walkthrough" className="project-section">
          <h2 className="section-heading">Homepage Walkthrough</h2>
          <p className="section-text">
            A quick look at scrolling through the homepage, from the hero section down to the
            featured products.
          </p>
          <video
            src={coeurPreview}
            poster={coeurPoster}
            className="project-body-image"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        <section id="product-page" className="project-section">
          <h2 className="section-heading">Product Page</h2>
          <p className="section-text">
            Beyond the homepage, I built out the individual product pages, including color
            selection, pricing, and expandable product details, to match the same clean, editorial
            feel throughout the shopping experience.
          </p>
          <img
            src={coeurProductPage}
            alt="Coeur product page for the Joséphine Laptop Bag"
            className="project-body-image"
          />
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Coeur
