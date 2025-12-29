import "../styles/Aside.css"

function Home() {
  return (
    <>
      <header className="page-header">

      </header>

      <aside className="sidebar">
        <header className="sidebar-header">
          <button className="account">
            <svg className="bi" width="32" height="32" fill="currentColor">
              <use href="bootstrap-icons.svg#home"/>
            </svg>
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
