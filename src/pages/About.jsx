import { useEffect, useRef, useState } from 'react'
import Footer from '../components/footer/Footer'
import photo from '../assets/IMG_1505.jpg'
import './About.css'

const filters = ['All Categories', 'Design', 'Code']

const skills = [
  { name: 'Java', categories: ['Code'] },
  { name: 'Visual Studio', categories: ['Code'] },
  { name: 'Visual Studio Code', categories: ['Code'] },
  { name: 'Smartsheet', categories: ['Code'] },
  { name: 'JSON', categories: ['Code'] },
  { name: 'Python', categories: ['Code'] },
  { name: 'React', categories: ['Code'] },
  { name: 'HTML', categories: ['Code'] },
  { name: 'C Programming Language', categories: ['Code'] },
  { name: 'Power Bi', categories: ['Code'] },
  { name: 'C++', categories: ['Code'] },
  { name: 'C#', categories: ['Code'] },
  { name: 'NUnit', categories: ['Code'] },
  { name: 'PyTest', categories: ['Code'] },
  { name: 'Figma', categories: ['Design'] },
  { name: 'Vite', categories: ['Code'] },
  { name: 'CSS', categories: ['Code'] },
  { name: 'JavaScript', categories: ['Code'] },
  { name: 'XAML', categories: ['Code'] },
  { name: 'Unity Engine', categories: ['Code'] },
  { name: 'Jenkins', categories: ['Code'] },
  { name: 'Devin AI', categories: ['Code'] },
  { name: 'Generative AI', categories: ['Code'] },
  { name: 'Vibe Coding', categories: ['Code', 'Design'] },
  { name: 'Adobe Suite', categories: ['Design'] },
  { name: 'Prototyping', categories: ['Design'] },
  { name: 'Wireframing', categories: ['Design'] },
  { name: 'Human-Centered Design', categories: ['Design'] },
  { name: 'Human Subjects & User Research (IRB/CITI Trained)', categories: ['Design'] },
  { name: 'Stakeholder Management', categories: ['Design'] },
]

const About = () => {
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

  const visibleSkills =
    activeFilter === 'All Categories'
      ? skills
      : skills.filter((skill) => skill.categories.includes(activeFilter))

  return (
    <div className="about-page">
      <div className="about-section">
        <div className="about-main">
          <div className="about-photo-frame">
            <img src={photo} alt="Danielle Crevecoeur" className="about-photo" />
          </div>

          <div className="about-text">
            <h1 className="about-title">
              <span className="accent">About</span>Me
            </h1>
            <p className="about-statement">
              I am a software engineer and designer who is passionate about creating technology that feels
              intuitive, thoughtful, and impactful. Currently pursuing a Master's in Computer Science
              with a specialization in Human Computer Interaction, I enjoy combining my technical depth
              with a user-centered approach to problem solving.
            </p>
            <p className="about-statement">
              Whether I'm writing code, prototyping experiences, or exploring emerging AI technologies,
              I aim to build impactful products and experiences.
            </p>

            <div className="about-skills">
              <h2 className="skills-title">Skills</h2>
              <div className="skills-filters">
                {filters.map((filter, index) => (
                  <span
                    key={filter}
                    ref={(el) => (filterRefs.current[index] = el)}
                    className={filter === activeFilter ? 'skills-filter active' : 'skills-filter'}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </span>
                ))}
                <span
                  className="skills-filter-indicator"
                  style={{ left: indicator.left, width: indicator.width }}
                ></span>
              </div>

              <div className="skill-tags">
                {visibleSkills.map((skill) => (
                  <span className="skill-tag" key={skill.name}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
