import "./styles.css";
// import { cepMock } from "../../Mock";
import ModalCep from "../ModalCep";
import { useContext } from "react";
import { cepContext } from "../../controllers/cepContext";

const ListCep = () => {
  const {
    handleBtnOpenClick,
    handleBtnCloseClick,
    isContainerOpen,
    formData,
    setFormData,
  } = useContext(cepContext);

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
      {/* {formData.map((cep) => ( */}
      {formData &&
        <section id="list-section" class="list-container">
          <div class="card-list-item">
            <h3>{formData.localidade}</h3>
            <p class="address-line">{`${formData.logradouro}, ${formData.numero}`}</p>
            <p class="address-cep">{formData.cep}</p>
          </div>
        </section>
       }
      {/* ))} */}
      <ModalCep isActive={isContainerOpen} isClose={handleBtnCloseClick} />
    </>
  );
};

export default ListCep;
