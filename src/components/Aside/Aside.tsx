import { useMemo, useState } from 'react'
import './Aside.css'

type AsideAction = {
  id: string
  label: string
  icon: JSX.Element
}

const mainActions: AsideAction[] = [
  {
    id: 'example',
    label: 'Exemplo',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6a2 2 0 0 1 2-2h6l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm8 0v4h4" />
      </svg>
    ),
  },
]

const utilityActions: AsideAction[] = [
  {
    id: 'account',
    label: 'Conta',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" />
      </svg>
    ),
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm8.94 4a7.94 7.94 0 0 0-.16-1.6l2.12-1.64-2-3.46-2.48 1a7.7 7.7 0 0 0-2.76-1.6l-.38-2.64h-4l-.38 2.64a7.7 7.7 0 0 0-2.76 1.6l-2.48-1-2 3.46 2.12 1.64A7.94 7.94 0 0 0 3.06 12a7.94 7.94 0 0 0 .16 1.6L1.1 15.24l2 3.46 2.48-1a7.7 7.7 0 0 0 2.76 1.6l.38 2.64h4l.38-2.64a7.7 7.7 0 0 0 2.76-1.6l2.48 1 2-3.46-2.12-1.64a7.94 7.94 0 0 0 .16-1.6z" />
      </svg>
    ),
  },
]

function Aside() {
  const [isOpen, setIsOpen] = useState(true)
  const stateClass = useMemo(() => (isOpen ? 'is-open' : 'is-closed'), [isOpen])

  return (
    <aside className={`aside ${stateClass}`} aria-label="Menu principal">
      <button
        type="button"
        className="aside-toggle"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Recolher menu lateral' : 'Expandir menu lateral'}
      >
        <span className="aside-toggle-icon" aria-hidden="true">
          {isOpen ? '←' : '→'}
        </span>
      </button>
      <div className="aside-utility" aria-label="Ações rápidas">
        {utilityActions.map((action) => (
          <button key={action.id} type="button" className="aside-icon-button" aria-label={action.label}>
            <span className="aside-icon" aria-hidden="true">
              {action.icon}
            </span>
          </button>
        ))}
      </div>
      <div className="aside-actions">
        {mainActions.map((action) => (
          <button key={action.id} type="button" className="aside-action">
            <span className="aside-icon" aria-hidden="true">
              {action.icon}
            </span>
            <span className="aside-text">{action.label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Aside
