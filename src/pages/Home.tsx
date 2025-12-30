import "../styles/Aside.css"
import Link from 'react-router-dom'
import { 
    Person, 
    Gear, 
    LayoutSidebar, 
    House,
    Search,
    Journal
} from "react-bootstrap-icons";

function Home() {
  return (
    <>
        <header className="page-header">

        </header>

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
                        <a className="sidebar-nav-link" href="">
                            <House />
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a className="sidebar-nav-link" href="">
                            <Search />
                            <span>Buscar</span>
                        </a>
                    </li>
                    <li>
                        <a className="sidebar-nav-link" href="">
                            <Journal />
                            <span>Cadernos</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <hr />

            <h6>Recentes</h6>

        </aside>

        <main>
            <h1>Home</h1>
            <p>Bem-vindo ao projeto.</p>
        </main>
    </>
  )
}

export default Home
