import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import xboxPrototypeScreens from '../assets/projects/xbox-prototype-screens.png'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">
          Hi, my name is <span className="accent">Danielle!</span>
        </h1>
        <h2 className="home-subtitle">Software Engineer • AI Builder • UX Designer at Dell</h2>
        <p className="home-description">
          I build thoughtful technology at the intersection of engineering, AI, and human-centered design,
          drawing on seven years of experience across academia and industry to deliver impact across diverse teams.
        </p>
        <a
          href={`${import.meta.env.BASE_URL}Danielle-Crevecoeur-Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View my resume
        </a>
      </div>

      <div className="home-projects">
        <Link to="/projects/xbox-gaming-and-wellness-insights" className="project-card project-card-link">
          <img src={xboxPrototypeScreens} alt="XBox Gaming and Wellness Insights" className="project-card-image" />
          <span className="project-card-label">XBox Gaming and Wellness Insights</span>
        </Link>
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
