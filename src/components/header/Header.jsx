import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Hélène Normant</h1>
        <h5 className="text-light">En Formation Développement informatique</h5>
        <CTA />
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll ⇨</a>
      </div>

    </header>
  )
}

export default Header