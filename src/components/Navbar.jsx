import React from 'react'
import Logo from './assets/Logo.png'
function Navbar() {
  return (
    <nav>
      <div>
        <a href="/"><img src={Logo} alt="L" /><span>XYZ</span></a>
      </div>
    </nav>
  )
}

export default Navbar;