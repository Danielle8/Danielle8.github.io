import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import xboxPrototypeScreens from '../assets/projects/xbox-prototype-screens.png'
import './Projects.css'

const filters = ['All Categories', 'Design', 'Code']

const projects = [
  {
    name: 'XBox Gaming and Wellness Insights',
    blurb: 'Medium fidelity prototypes exploring the intersection of gaming and wellness for Xbox.',
    categories: ['Design'],
    link: '/projects/xbox-gaming-and-wellness-insights',
    image: xboxPrototypeScreens,
  },
  { name: 'Project Name', blurb: '[include blurb here]', categories: ['Code'] },
  { name: 'Project Name', blurb: '[include blurb here]', categories: ['Design', 'Code'] },
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Categories')
  const filterRefs = useRef([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const activeIndex = filters.indexOf(activeFilter)
    const el = filterRefs.current[activeIndex]
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
    }
  }, [activeFilter])

  const visibleProjects =
    activeFilter === 'All Categories'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <div className="projects-page">
      <div className="projects-intro">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-description">
          My work spans software engineering, AI, UX, and product innovation across industries ranging from cybersecurity and IoT to sustainability and fashion technology.

I've had the opportunity to contribute to teams including Security Solutions, Global Packaging Engineering, Windows IoT, Dell Pro AI Studio, Experience Design, and Coeur.
        </p>

        <p className="projects-description">
          Toggle between the categories below to explore projects from across my experience.
        </p>

        <div className="projects-filters">
          {filters.map((filter, index) => (
            <span
              key={filter}
              ref={(el) => (filterRefs.current[index] = el)}
              className={filter === activeFilter ? 'projects-filter active' : 'projects-filter'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </span>
          ))}
          <span
            className="projects-filter-indicator"
            style={{ left: indicator.left, width: indicator.width }}
          ></span>
        </div>
      </div>

      <div className="projects-list">
        {visibleProjects.map((project, index) => {
          const rowContent = (
            <>
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-blurb">{project.blurb}</p>
              </div>
              {project.image ? (
                <img src={project.image} alt={project.name} className="project-placeholder project-image" />
              ) : (
                <div className="project-placeholder"></div>
              )}
            </>
          )

          return project.link ? (
            <Link to={project.link} className="project-row project-row-link" key={index}>
              {rowContent}
            </Link>
          ) : (
            <div className="project-row" key={index}>
              {rowContent}
            </div>
          )
        })}
      </div>

      <Footer />
    </div>
  )
}

export default Projects
