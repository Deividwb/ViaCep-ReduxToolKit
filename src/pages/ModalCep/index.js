import "./styles.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

// const inputCep = document.forms.newAddress.cep;
// console.log("inputCep", inputCep);

export default function ModalCep({ isActive }) {
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");

  async function loadCep() {
    const response = await api.get("/01001000/json");
    console.log(response);
  }

  // const inputCep = document.forms.newAddress.cep;
  // console.log("inputCep", inputCep.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cep || !street || !number || !city) {
      console.log(cep, number);
      return toast.warning("Por favor, preencha todos os campos!!");
    }
    // inputCep = cep.value;
  };

  return (
    <section
      id="modal-contact"
      class={`modal-container ${isActive === true ? "active" : ""}`}
    >
      <div class="modal-box">
        <div className="modal-content">
          <section id="form-section" class="form-container">
            <div className="card-form">
              <form onSubmit={handleSubmit} name="newAddress">
                <div className="form-control">
                  <label for="cep">CEP:</label>
                  <input
                    name="cep"
                    id="cep"
                    class="form-input"
                    type="text"
                    placeholder="CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
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
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
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
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
          onClick={loadCep}
        >
          Fechar
        </button>
      </div>
    </section>
  );
}
