import linkedinIcon from '../../assets/icons/linkedin.svg'
import envelopeIcon from '../../assets/icons/envelope.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/danielle-crevecoeur" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a href="mailto:crevecoeurdanielle@gmail.com">
          <img src={envelopeIcon} alt="Email" className="icon" />
        </a>
      </div>
      <p className="footer-text">Danielle Crevecoeur 2025</p>
    </div>
  )
}

export default Footer
