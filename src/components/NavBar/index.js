import React, { useContext, useState } from 'react'
import { cepContext } from '../../controllers/cepContext'

import './styles.css'

const NavBar = () => {
  const { handleBtnOpenClick } = useContext(cepContext)

  return (
    <header class="nav-container">
      <nav class="nav-main">
        <h1> Via CEP</h1>
        <div class="contact-link">
          <a onClick={handleBtnOpenClick}>Contato</a>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
