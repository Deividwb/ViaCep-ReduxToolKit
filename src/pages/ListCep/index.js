import "./styles.css";

import { cepMock } from "../../Mock";
import { useState } from "react";
import ModalCep from "../ModalCep";
import NavBar from "../../components/NavBar";

const ListCep = () => {
  const [isContainerOpen, setContainerIsOpen] = useState(true);

  function handleBtnCloseClick() {
    setContainerIsOpen(false);
  }

  return (
    <>
      {cepMock.map((cep) => (
        <section id="list-section" class="list-container">
          <div class="card-list-item">
            <h3>{cep.localidade}</h3>
            <p class="address-line">{`${cep.logradouro}, ${cep.numero}`}</p>
            <p class="address-cep">{cep.cep}</p>
          </div>
        </section>
      ))}
      <ModalCep isActive={isContainerOpen} />
    </>
  );
};

export const handleBtnOpenClick = () => {
  alert("Ok;)");
};

export default ListCep;
