import './Tags.scss'

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tags__item">
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags