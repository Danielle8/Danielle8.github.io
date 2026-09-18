import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/daniellecrevecoeurlogo.png'
import './Navbar.css'

const navItems = [
  { key: 'home', to: '/', end: true, label: 'Home' },
  { key: 'about', to: '/about', label: 'About Me' },
  { key: 'projects', to: '/projects', label: 'Projects' },
  { key: 'contact', to: '/contact', label: 'Contact Me', accent: true },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const itemRefs = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })
  const location = useLocation()

  const activeKey =
    navItems.find((item) =>
      item.end ? location.pathname === item.to : location.pathname.startsWith(item.to)
    )?.key ?? null

  useEffect(() => {
    const el = itemRefs.current[activeKey]
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true })
    } else {
      setIndicator((prev) => ({ ...prev, visible: false }))
    }
  }, [activeKey, menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="navbar">
      <Link to="/" className="nav-logo-link" onClick={closeMenu}>
        <img src={logo} alt="danielle crevecoeur" className="nav-logo" />
      </Link>

      <button
        className={menuOpen ? 'nav-toggle open' : 'nav-toggle'}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={menuOpen ? 'nav-links-wrap open' : 'nav-links-wrap'}>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.key}>
              <NavLink
                to={item.to}
                end={item.end}
                onClick={closeMenu}
                ref={(el) => (itemRefs.current[item.key] = el)}
                className={({ isActive }) => {
                  const classes = []
                  if (item.accent) classes.push('nav-accent')
                  if (isActive) classes.push('active')
                  return classes.join(' ')
                }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <span
            className="nav-indicator"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.visible ? 1 : 0,
            }}
          ></span>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
