import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src="./kasa-logo.svg" alt="Kasa Logo" />
        </Link>
        <nav className="header__nav">
          <Link 
            to="/" 
            className={`header__nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Accueil
          </Link>
          <Link 
            to="/about" 
            className={`header__nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            A Propos
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header