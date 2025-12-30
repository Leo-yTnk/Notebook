import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Gear,
  House,
  Journal,
  LayoutSidebar,
  Person,
  Search,
  PlusLg,
} from 'react-bootstrap-icons'
import '../styles/Aside.css'

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
          className="chrome-control highlight new"
        >
          <PlusLg />
        </button>
        <button
          className="chrome-control toggle-sidebar"
          onClick={() => setIsCollapsed((current) => !current)}
        >
          <LayoutSidebar size={16} />
        </button>
      </header>

      <nav className="sidebar-nav">
        <ul className="chrome-control">
          <li>
            <Link className="sidebar-nav-link" to="/">
              <House />
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link className="sidebar-nav-link" to="/search">
              <Search />
              <span>Buscar</span>
            </Link>
          </li>
          <li>
            <Link className="sidebar-nav-link" to="/notebooks">
              <Journal />
              <span>Cadernos</span>
            </Link>
          </li>
        </ul>
      </nav>

      <hr />

      <h6>Recentes</h6>

      <footer className="sidebar-footer">
        <button className="chrome-control settings" aria-label="Configurações">
          <Gear size={16} />
        </button>
        <button className="chrome-control account" aria-label="Conta">
          <Person size={16} />
        </button>
      </footer>
    </aside>
  )
}

export default Sidebar
