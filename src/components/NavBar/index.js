import React, { useState } from "react";
import "./styles.css";
import ListCep from "../../pages/ListCep";

const NavBar = () => { 

  function alertOn() {
    
     alert("Dentro Nav ");
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
