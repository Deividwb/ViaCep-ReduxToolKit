import "./styles.css";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import axios from "axios";
import ListCep from "../ListCep";

// const inputCep = document.forms.newAddress.cep;
// console.log("inputCep", inputCep);

export default function ModalCep({ isActive, isClose }) {
  const [llenarCep, setLlenarCep] = useState([
    // cep:0,
    // street:"",
    // number:0,
    // city:""
  ]);

  // async function loadCep() {
  //   const response = await api.get("/01001000/json");
  //   console.log(response.data);
  // }

  useEffect(() => {
    axios
      .get("https://viacep.com.br/ws/01001000/json/")
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  // const inputCep = document.forms.newAddress.cep;
  // console.log("inputCep", inputCep.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!llenarCep.cep) {
     // return toast.warning("Por favor, preencha todos os campos!!");
    }else{
    setLlenarCep((oldCep) => [...oldCep, llenarCep]);
    setLlenarCep("");
    console.log(llenarCep)
    }
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
                    value={llenarCep.cep}
                    onChange={(e) => setLlenarCep.cep(e.target.value)}
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
                    value={llenarCep.street}
                    onChange={(e) => setLlenarCep.street(e.target.value)}
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
                    value={llenarCep.number}
                    onChange={(e) => setLlenarCep.number(e.target.value)}
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
                    value={llenarCep.city}
                    onChange={(e) => setLlenarCep.city(e.target.value)}
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
          onClick={isClose}
        >
          Fechar
        </button>
      </div>
    </section>
  );
}
