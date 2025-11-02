import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={`${import.meta.env.BASE_URL}kasa-logo-white.svg`} alt="Kasa" className="footer__logo" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer