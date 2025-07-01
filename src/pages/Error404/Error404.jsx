import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Error404.scss'

const Error404 = () => {
  return (
    <div className="error404">
      <Header />
      <main className="error404__main">
        <h1 className="error404__title">404</h1>
        <p className="error404__message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error404__link">
          Retourner sur la page d'accueil
        </Link>
      </main>
      <Footer />
    </div>
  )
}

export default Error404