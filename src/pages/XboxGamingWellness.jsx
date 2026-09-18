import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import xboxPrototypeScreens from '../assets/projects/xbox-prototype-screens.png'
import './ProjectDetail.css'

const EmpathizeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="17" cy="18" r="10" />
    <path d="M27 16l5 2-5 2" />
    <path d="M9 32c0-4.5 3.5-8 8-8" />
    <circle cx="31" cy="18" r="10" />
    <path d="M21 16l-5 2 5 2" />
    <path d="M39 32c0-4.5-3.5-8-8-8" />
  </svg>
)

const DefineIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="12" width="36" height="24" rx="1" />
    <line x1="12" y1="20" x2="36" y2="20" />
    <line x1="12" y1="17" x2="12" y2="23" />
    <line x1="36" y1="17" x2="36" y2="23" />
    <rect x="16" y="26" width="4" height="4" />
    <circle cx="30" cy="28" r="2" />
  </svg>
)

const IdeateIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 6a12 12 0 0 0-7 22c1.5 1.2 2 2.5 2 4v2h10v-2c0-1.5.5-2.8 2-4a12 12 0 0 0-7-22z" />
    <line x1="20" y1="40" x2="28" y2="40" />
    <line x1="21" y1="44" x2="27" y2="44" />
  </svg>
)

const PrototypeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 8h22l6 6v26H10z" />
    <path d="M32 8v6h6" />
    <line x1="16" y1="20" x2="30" y2="20" />
    <line x1="16" y1="26" x2="26" y2="26" />
    <path d="M16 32l14-2" />
  </svg>
)

const TestIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="8" width="20" height="26" rx="2" />
    <polyline points="10 16 13 19 18 13" />
    <line x1="10" y1="26" x2="18" y2="26" />
    <rect x="32" y="10" width="10" height="18" rx="5" />
    <line x1="37" y1="10" x2="37" y2="16" />
  </svg>
)

const processSteps = [
  {
    id: 'empathize',
    label: 'Empathize',
    icon: <EmpathizeIcon />,
    body: "I ran a heuristic evaluation of Xbox's Game Activity interface and Steam's game library against three principles (discoverability, consistency, and structure) to understand how each platform currently surfaces gameplay data. In parallel, I surveyed 22 gamers (family, friends, and colleagues) about their gaming habits, self-awareness, and what information they'd find valuable. The results made it clear that both platforms tracked activity well but stopped short of helping players understand or reflect on their habits.",
  },
  {
    id: 'define',
    label: 'Define',
    icon: <DefineIcon />,
    body: 'Three insights shaped the direction of the project: existing interfaces focus on playtime and achievements rather than habit awareness, and over 90% of survey respondents wanted more; even self-aware gamers reported losing track of time, skipping breaks, and ignoring fatigue during long sessions; and players already value activity tracking, but want it to go beyond cumulative numbers toward session summaries, trends, and personalized insight.',
  },
  {
    id: 'ideate',
    label: 'Ideate',
    icon: <IdeateIcon />,
    body: 'Working independently and with generative AI as a brainstorming partner, I generated more than 20 ideas spanning activity visualization, wellness insights, personalized recommendations, goal setting, and social features. I grouped and narrowed these into three design directions: a Wellness Dashboard, Gaming Activity Insights (behavioral analytics like trends, active days, and genres), and Personal Goals & Progress (optional, reflection-based goal tracking).',
  },
  {
    id: 'prototype',
    label: 'Prototype',
    icon: <PrototypeIcon />,
    body: 'I built low-fidelity prototypes for all three directions and evaluated them with 7 participants. Gaming Activity Insights was the clear favorite, with 71.4% picking it as their top choice for the visual trends and comparisons it surfaced. From there, I built a medium-fidelity Figma prototype that used Gaming Activity Insights as its foundation while folding in the most-requested elements from the other two concepts, including wellness summaries and weekly/monthly comparisons.',
  },
  {
    id: 'test',
    label: 'Test',
    icon: <TestIcon />,
    body: 'The final prototype was evaluated with five participant-equivalents (four sessions, plus one extended expert interview weighted as two) using both quantitative ratings and open-ended questions. Organization (4.4/5), satisfaction (4.5/5), usefulness (4.3/5), and visual appeal (4.3/5) all scored highly. Ease of navigation was the lowest-rated area (3.4/5), which was expected since the medium-fidelity prototype prioritized exploring information architecture over building out fully interactive navigation flows. Participants specifically called out comparative, week-over-week insights as one of the most valuable features.',
  },
]

const XboxGamingWellness = () => {
  return (
    <div className="project-detail-page">
      <Link to="/projects" className="project-detail-back">← Back to Projects</Link>

      <div className="project-detail-header">
        <h1 className="project-detail-title">XBox Gaming and Wellness Insights</h1>

        <div className="project-detail-meta">
          <div className="meta-item">
            <h3 className="meta-label">Project Scope</h3>
            <p className="meta-value">Medium Fidelity Prototypes</p>
          </div>
          <div className="meta-item">
            <h3 className="meta-label">Role:</h3>
            <p className="meta-value">UX Research and Product Design (UX/UI)</p>
          </div>
          <div className="meta-item">
            <h3 className="meta-label">Tools Used:</h3>
            <p className="meta-value">Figma</p>
          </div>
        </div>
      </div>

      <a
        href="https://www.figma.com/design/eXKpDtso1MLRPpBWFW1nDa/HCI-Individual-Project?node-id=0-1&t=9wk9gnX4duUxWsE4-1"
        target="_blank"
        rel="noopener noreferrer"
        className="prototype-btn"
      >
        View Final Prototype
      </a>

      <img
        src={xboxPrototypeScreens}
        alt="Final Xbox Gaming and Wellness Insights prototype screens"
        className="project-detail-placeholder project-detail-image"
      />

      <div className="project-detail-body">
        <section id="background" className="project-section">
          <h2 className="section-heading">Background</h2>
          <p className="section-text">
            This project began with a question I kept coming back to in my day-to-day work: gaming
            platforms are incredibly good at tracking what players do, but not at helping them
            understand how those habits affect their well-being. I currently work on a team focused on
            user experience for one of the largest gaming brands in the world, which gave me a close
            look at how deeply gaming is woven into people's daily lives. Combining that perspective
            with my long-standing interest in health and well-being, I set out to redesign Xbox's
            existing Game Activity and Stats interface, not to discourage play but to help players
            understand and manage their habits more intentionally.
          </p>
        </section>

        <section id="problem" className="project-section">
          <h2 className="section-heading">Problem</h2>
          <p className="section-text">
            Xbox and Steam both let players check total playtime, achievements, and game-specific
            stats, but neither interface helps players understand how their habits develop over time. A
            heuristic evaluation of both platforms, focused on discoverability, consistency, and
            structure, confirmed that the information is easy to find and well organized. It just isn't
            meaningful. A survey of 22 gamers reinforced the gap: over 90% wanted insights beyond total
            playtime, and over 95% admitted to losing track of time, skipping breaks, or ignoring signs
            of fatigue during longer sessions. Simply displaying cumulative stats wasn't helping players
            build healthier habits.
          </p>
        </section>

        <section id="project-goals" className="project-section">
          <h2 className="section-heading">Project Goals</h2>
          <p className="section-text">
            The goal was to expand Xbox's existing activity-tracking interface, not replace it, with
            wellness-focused insights like average session length, longest session, break frequency, and
            personalized trends. The redesign needed to make healthy gaming habits more visible and
            actionable without disrupting the core gaming experience or feeling judgmental about how
            people choose to play.
          </p>
        </section>

        <section id="the-process" className="process-visual">
          <h2 className="process-title">The Process</h2>
          <div className="process-steps">
            {processSteps.map((step) => (
              <a href={`#${step.id}`} className="process-step" key={step.id}>
                <span className="process-icon">{step.icon}</span>
                <span className="process-label">{step.label}</span>
              </a>
            ))}
          </div>
        </section>

        {processSteps.map((step) => (
          <section id={step.id} className="project-section" key={step.id}>
            <h3 className="subsection-heading">{step.label}</h3>
            <p className="section-text">{step.body}</p>
          </section>
        ))}

        <section id="reflections" className="project-section">
          <h2 className="section-heading">Reflections</h2>
          <p className="section-text">
            This project reinforced that players don't just want more data. They want data that helps
            them understand themselves. The strongest response came from features that supported
            reflection and comparison over time, not raw statistics. It also surfaced a clear next step:
            navigation and information hierarchy need more dedicated exploration in a future iteration,
            since participants weren't always sure how to move between weekly, monthly, and
            goal-tracking views. Balancing wellness support with a tone that feels encouraging rather
            than restrictive is the open design challenge I'd continue to explore if I kept iterating on
            this concept.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default XboxGamingWellness
