import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <div className="card__overlay"></div>
      <h3 className="card__title">{title}</h3>
    </Link>
  )
}

export default Card