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

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <div>
          <a className="chrome-control settings">
            <Gear size={16} />
          </a>
          <a className="chrome-control account">
            <Person size={16} />
          </a>
        </div>
        <button className="chrome-control toggle-sidebar">
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
    </aside>
  )
}

export default Sidebar
