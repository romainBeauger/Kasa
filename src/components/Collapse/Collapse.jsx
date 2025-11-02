import { useState } from 'react'
import './Collapse.scss'

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <button 
        className="collapse__header" 
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>
        <img 
          src={isOpen ? `${import.meta.env.BASE_URL}arrow_up.png` : `${import.meta.env.BASE_URL}arrow_down.png`}
          alt={isOpen ? "Fermer" : "Ouvrir"}
          className="collapse__arrow"
        />
      </button>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        <div className="collapse__content-wrapper">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Collapse