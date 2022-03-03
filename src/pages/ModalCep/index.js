import "./styles.css";
import React from "react";

// const inputCep = document.forms.newAddress.cep;
// console.log("inputCep", inputCep);

export default function ModalCep({ isActive }) {
  return (
    <section
      id="modal-contact"
      class={`modal-container ${isActive === true ? "active" : ""}`}
    >
      <div class="modal-box">
        <div class="modal-content">
          <section id="form-section" class="form-container">
            <div class="card-form">
              <form name="newAddress">
                <div class="form-control">
                  <label for="cep">CEP:</label>
                  <input
                    name="cep"
                    id="cep"
                    class="form-input"
                    type="text"
                    placeholder="CEP"
                  />
                  <div class="error-message" data-error="cep"></div>
                </div>
                <div class="form-control">
                  <label for="street">Logradouro:</label>
                  <input
                    name="street"
                    id="street"
                    class="form-input"
                    type="text"
                    placeholder="Logradouro"
                    disabled
                  />
                </div>
                <div class="form-control">
                  <label for="number">Número:</label>
                  <input
                    name="number"
                    id="number"
                    class="form-input"
                    type="text"
                    placeholder="Número"
                  />
                  <div class="error-message" data-error="number"></div>
                </div>
                <div class="form-control">
                  <label for="city">Cidade:</label>
                  <input
                    name="city"
                    id="city"
                    class="form-input"
                    type="text"
                    placeholder="Cidade"
                    disabled
                  />
                </div>
                <div className="btn-container ">
                  <button
                    name="btnSave"
                    className=" effect effect-2 "
                    type="submit"
                  >
                    Salvar
                  </button>
                  <button name="btnClear" className="effect effect-2">
                    Limpar
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>

        <button
          id="modal-contact-close"
          className="size-button effect effect-2"
          onClick={"handleBtnCloseClick"}
        >
          Fechar
        </button>
      </div>
    </section>
  );
}
