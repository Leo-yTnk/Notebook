import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [playIntro, setPlayIntro] = useState(false)
  const animatedElementsRef = useRef<(HTMLElement | null)[]>([])
  const previousRectsRef = useRef<Map<HTMLElement, DOMRect> | null>(null)

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

  useLayoutEffect(() => {
    const previousRects = previousRectsRef.current
    if (!previousRects) return

    const elements = animatedElementsRef.current.filter(
      (element): element is HTMLElement => element !== null,
    )

    elements.forEach((element) => {
      const previousRect = previousRects.get(element)
      if (!previousRect) {
        element.animate(
          [
            { opacity: 0, transform: 'translateY(-10px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 220, easing: 'ease', fill: 'both' },
        )
        return
      }

      const nextRect = element.getBoundingClientRect()
      const deltaX = previousRect.left - nextRect.left
      const deltaY = previousRect.top - nextRect.top

      if (deltaX === 0 && deltaY === 0) return

      element.animate(
        [
          { transform: `translate(${deltaX}px, ${deltaY}px)` },
          { transform: 'translate(0, 0)' },
        ],
        { duration: 320, easing: 'ease', fill: 'both' },
      )
    })

    previousRectsRef.current = null
  }, [isCollapsed])

  const handleToggleSidebar = () => {
    const elements = animatedElementsRef.current.filter(
      (element): element is HTMLElement => element !== null,
    )
    previousRectsRef.current = new Map(
      elements.map((element) => [element, element.getBoundingClientRect()]),
    )
    setIsCollapsed((current) => !current)
  }

  const setAnimatedElement =
    (index: number) => (element: HTMLElement | null) => {
      animatedElementsRef.current[index] = element
    }

  return (
    <aside
      className={`sidebar${isCollapsed ? ' sidebar--collapsed' : ''}${
        playIntro ? ' sidebar--intro' : ''
      }`}
    >
      <header className="sidebar-header" ref={setAnimatedElement(0)}>
        {!isCollapsed && (
          <div>
            <button
              className="chrome-control settings"
              aria-label="Configurações"
            >
              <Gear size={16} />
            </button>
            <button className="chrome-control account" aria-label="Conta">
              <Person size={16} />
            </button>
          </div>
        )}
        <button
          className="chrome-control toggle-sidebar"
          onClick={handleToggleSidebar}
          aria-label={isCollapsed ? 'Expandir sidebar' : 'Encolher sidebar'}
        >
          <LayoutSidebar size={16} />
        </button>
      </header>

      <nav className="sidebar-nav" ref={setAnimatedElement(1)}>
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

      <hr ref={setAnimatedElement(2)} />

      <h6 ref={setAnimatedElement(3)}>Recentes</h6>

      {isCollapsed && (
        <footer className="sidebar-footer" ref={setAnimatedElement(4)}>
          <button
            className="chrome-control settings"
            aria-label="Configurações"
          >
            <Gear size={16} />
          </button>
          <button className="chrome-control account" aria-label="Conta">
            <Person size={16} />
          </button>
        </footer>
      )}
    </aside>
  )
}

export default Sidebar
