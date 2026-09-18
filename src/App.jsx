import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import XboxGamingWellness from './pages/XboxGamingWellness'
import Coeur from './pages/Coeur'
import BonkLite from './pages/BonkLite'

const App = () => {
  return (
    <Router basename="/Danielle8.github.io">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/xbox-gaming-and-wellness-insights" element={<XboxGamingWellness />} />
        <Route path="/projects/coeur" element={<Coeur />} />
        <Route path="/projects/bonk-lite" element={<BonkLite />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App