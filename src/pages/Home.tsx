import "../styles/Aside.css"
import { Person, PersonFill } from "react-bootstrap-icons";

function Home() {
  return (
    <>
      <header className="page-header">

      </header>

      <aside className="sidebar">
        <header className="sidebar-header">
          <button className="account">
            <Person     size={32} className="icon outline-icon" />
            <PersonFill size={32} className="icon fill-icon" />
          </button>
        </header>
      </aside>

      <main>
        <h1>Home</h1>
        <p>Bem-vindo ao projeto.</p>
      </main>
    </>
  )
}

export default Home
