import React, { useState } from "react";
import "./styles.css";
import ListCep, { handleBtnOpenClick } from "../../pages/ListCep";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isContainerOpen, setContainerIsOpen] = useState(false);

  function alertOn() {
    handleBtnOpenClick();
    // alert("Dentro Nav ");
  }

  return (
    <header class="nav-container">
      <nav class="nav-main">
        <a href="/cep">
          <h1> Via CEP</h1>
        </a>

        <div class="contact-link">
          <a onClick={alertOn}>Buscar Cep</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
