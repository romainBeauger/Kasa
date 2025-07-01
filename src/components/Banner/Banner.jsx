import './Banner.scss'

const Banner = ({ image, text, overlay = true }) => {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner__image" />
      {overlay && <div className="banner__overlay"></div>}
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  )
}

export default Banner