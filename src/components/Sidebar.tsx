import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Gear,
  House,
  Journal,
  LayoutSidebar,
  Person,
  Search,
} from 'react-bootstrap-icons'
import '../styles/Aside.css'

const navItems = [
  { to: '/', label: 'Início', Icon: House },
  { to: '/search', label: 'Buscar', Icon: Search },
  { to: '/notebooks', label: 'Cadernos', Icon: Journal },
]

const footerActions = [
  { label: 'Configurações', Icon: Gear },
  { label: 'Conta', Icon: Person },
]

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [playIntro, setPlayIntro] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('sidebarIntroPlayed')) {
      setPlayIntro(true)
      sessionStorage.setItem('sidebarIntroPlayed', 'true')
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--aside-width',
      isCollapsed ? '4rem' : '13.5rem',
    )
  }, [isCollapsed])

  return (
    <aside
      className={`sidebar${isCollapsed ? ' sidebar--collapsed' : ''}${
        playIntro ? ' sidebar--intro' : ''
      }`}
    >
      <header className="sidebar-header">
        <button
          className="chrome-control toggle-sidebar"
          onClick={() => setIsCollapsed((current) => !current)}
        >
          <LayoutSidebar size={16} />
        </button>
      </header>

      <nav className="sidebar-nav">
        <ul className="chrome-control">
          {navItems.map(({ to, label, Icon }) => (
            <li key={to}>
              <Link className="sidebar-nav-link" to={to}>
                <Icon />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <hr />

      <h6>Recentes</h6>

      <footer className="sidebar-footer">
        {footerActions.map(({ label, Icon }) => (
          <button
            key={label}
            className="chrome-control"
            aria-label={label}
          >
            <Icon size={16} />
          </button>
        ))}
      </footer>
    </aside>
  )
}

export default Sidebar
