import "./styles.css";
import { cepMock } from "../../Mock";
//import { useState } from "react";
import ModalCep from "../ModalCep";
import { useState } from "react";
//import NavBar from "../../components/NavBar";
import { toast } from "react-toastify";

const ListCep = ({ isFunction}) => {
  const [isContainerOpen, setContainerIsOpen] = useState(false);

  function handleBtnCloseClick() {
    setContainerIsOpen(false);
  }

  const handleBtnOpenClick = () => {
    toast.warning("Preencha os Campos");
    setContainerIsOpen(true);
 
  };

  return (
    <>
      <div className="cep-btn">
        <button
          name="btnCep"
          className="effect effect-2"
          onClick={handleBtnOpenClick}
        >
          Buscar Cep
        </button>
      </div>
      {cepMock.map((cep) => (
        <section id="list-section" class="list-container">
          <div class="card-list-item">
            <h3>{cep.localidade}</h3>
            <p class="address-line">{`${cep.logradouro}, ${cep.numero}`}</p>
            <p class="address-cep">{cep.cep}</p>
          </div>
        </section>
      ))}
      <ModalCep isActive={isContainerOpen} 
      isClose = {handleBtnCloseClick}
      />    
      
    </>
  );
};

export default ListCep;
