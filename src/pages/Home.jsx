import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import xboxPrototypeScreens from '../assets/projects/xbox-prototype-screens.png'
import coeurHomepage from '../assets/projects/coeur-homepage.jpg'
import bonkLitePoster from '../assets/projects/bonk-lite-poster.jpg'
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

      <div className="home-specialization">
        <h2 className="specialization-heading">Where AI Meets Design</h2>
        <p className="specialization-text">
          I specialize in AI tooling, finding practical ways to weave generative AI into existing
          workflows, particularly within design driven spaces. Working alongside cross functional
          teams, I build functional prototypes from the ground up using tools like Devin, Claude,
          and Cursor, turning early concepts into working software fast.
        </p>
        <p className="specialization-text">
          What sets my work apart is the blend of software engineering and design sensibility I
          bring to every build. AI can move quickly, but speed alone often produces interfaces
          that feel generic and unmistakably AI-generated. I bridge that gap, pairing AI accelerated
          development with a strong eye for visual polish and intuitive interaction, so what I
          ship feels considered and human rather than machine made.
        </p>
      </div>

      <div className="home-projects">
        <Link to="/projects/xbox-gaming-and-wellness-insights" className="project-card project-card-link">
          <img src={xboxPrototypeScreens} alt="XBox Gaming and Wellness Insights" className="project-card-image" />
          <span className="project-card-label">XBox Gaming and Wellness Insights</span>
        </Link>
        <Link to="/projects/coeur" className="project-card project-card-link">
          <img src={coeurHomepage} alt="Coeur" className="project-card-image" />
          <span className="project-card-label">Coeur</span>
        </Link>
        <Link to="/projects/bonk-lite" className="project-card project-card-link">
          <img src={bonkLitePoster} alt="Bonk Lite" className="project-card-image" />
          <span className="project-card-label">Bonk Lite</span>
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default Home
