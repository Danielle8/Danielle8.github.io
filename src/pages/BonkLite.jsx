import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import bonkLitePreview from '../assets/projects/bonk-lite-preview.mp4'
import bonkLitePoster from '../assets/projects/bonk-lite-poster.jpg'
import bonkLiteTrailer from '../assets/projects/bonk-lite-trailer.mp4'
import './ProjectDetail.css'

const BonkLite = () => {
  return (
    <div className="project-detail-page">
      <Link to="/projects" className="project-detail-back">← Back to Projects</Link>

      <div className="project-detail-header">
        <h1 className="project-detail-title">Bonk Lite</h1>

        <div className="project-detail-meta">
          <div className="meta-item">
            <h3 className="meta-label">Project Scope</h3>
            <p className="meta-value">3D Survival Action Game (Team of 5)</p>
          </div>
          <div className="meta-item">
            <h3 className="meta-label">Role:</h3>
            <p className="meta-value">Game Programmer & Designer: UI, Menus & Game Flow</p>
          </div>
          <div className="meta-item">
            <h3 className="meta-label">Tools Used:</h3>
            <p className="meta-value">Unity Game Engine, C#, Visual Studio, Git, GitHub</p>
          </div>
        </div>
      </div>

      <a
        href={bonkLiteTrailer}
        target="_blank"
        rel="noopener noreferrer"
        className="prototype-btn"
      >
        Watch Trailer
      </a>

      <video
        src={bonkLitePreview}
        poster={bonkLitePoster}
        className="project-detail-placeholder project-detail-video"
        style={{ aspectRatio: '8 / 5' }}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="project-detail-body">
        <section id="background" className="project-section">
          <h2 className="section-heading">Background</h2>
          <p className="section-text">
            Bonk Lite is a 3D survival action game built in Unity for a Video Game Design course,
            developed with my four-person team, Missing Links. Players survive increasingly
            difficult waves of enemies, collecting currency to level up and choosing powerful
            upgrades to combine into a build, all working toward defeating an end-of-run boss
            before it defeats them. I worked on the game's UI, menu systems, and overall game flow.
          </p>
        </section>

        <section id="contributions" className="project-section">
          <h2 className="section-heading">My Contributions</h2>
          <p className="section-text">
            I designed and built the game's main menu, pause menu, and end-of-game experience from
            the ground up. The main menu lets players start the game, review a How to Play guide
            covering the objective, survival tips, and controls, browse the credits, or quit, all
            set against a live, animated background with its own visual flair and polished,
            responsive buttons. The pause menu follows the same design language so navigation feels
            consistent no matter where a player is in the game.
          </p>
          <p className="section-text">
            When a run ends, I built the win and lose screens that clearly communicate the outcome
            to the player, along with the flow for replaying a run, returning to the main menu, or
            quitting. I also added the celebratory visual effect that plays when the boss is
            defeated, made sure the camera stops responding to mouse movement while any menu is
            open so it doesn't interfere with clicking buttons, and made the main menu's background
            environment consistent every time the game loads so it always looks intentional rather
            than randomly generated.
          </p>
        </section>

        <section id="how-to-play" className="project-section">
          <h2 className="section-heading">How to Play</h2>
          <p className="section-text">
            Survive increasingly difficult waves of enemies. Collect currency to level up, and
            choose powerful upgrades with each level-up to combine into a build. Survive long
            enough to face the end-of-run boss. Defeat it to win, or die trying and restart.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default BonkLite
