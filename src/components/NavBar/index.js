import React, { useState } from "react";
import "./styles.css";

const NavBar = () => {
  const [isFunction, setIsFunction] = useState(true);

  function alertOn() {
    return isFunction;
  }

  return (
    <header class="nav-container">
      <nav class="nav-main">
        <h1> Via CEP</h1>
        <div class="contact-link">
          <a onClick={alertOn}>Buscar Cep</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
