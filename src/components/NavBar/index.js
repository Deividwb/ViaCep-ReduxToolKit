import React, { useState } from "react";

import "./styles.css";

const NavBar = ({ onNavClick }) => {
  const [isFunction, setIsFunction] = useState(false);

  function onNavClick() {
    setIsFunction(true);
    alert("Fazer Funcionar no List");
  }

  function offNavClick() {
    setIsFunction(false);
  }

  return (
    <header class="nav-container">
      <nav class="nav-main">
        <h1> Via CEP</h1>
        <div class="contact-link">
          <a onClick={onNavClick}>Contato</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
