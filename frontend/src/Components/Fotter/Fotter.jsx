import React from 'react'
import './Fotter.css'
import fotter_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Fotter = () => {
  return (
    <div className='fotter'>
      <div className="fotter-logo">
        <img src={fotter_logo} alt="" />
        <p>FABBLY</p>
      </div>
      <ul className="fotter-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="fotter-social-icon">
        <div className="fotter-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="fotter-icons-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="fotter-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="fotter-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Fotter
