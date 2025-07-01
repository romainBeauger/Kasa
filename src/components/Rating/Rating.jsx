import './Rating.scss'

const Rating = ({ rating }) => {
  const stars = []
  const totalStars = 5

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <span 
        key={i} 
        className={`rating__star ${i <= parseInt(rating) ? 'rating__star--filled' : ''}`}
      >
        ★
      </span>
    )
  }

  return (
    <div className="rating">
      {stars}
    </div>
  )
}

export default Rating