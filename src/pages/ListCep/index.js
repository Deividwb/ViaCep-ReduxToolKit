import "./styles.css";

const ListCep = () => {
  const cepMock = [
    {
      cep: "01001-000",
      logradouro: "Praça da Sé",
      complemento: "lado ímpar",
      bairro: "Sé",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107",
      numero: "50",
    },
    {
      cep: "01001-999",
      logradouro: "Rua do Zé",
      complemento: "lado ímpar",
      bairro: "Sé",
      localidade: "Minas",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "33",
      siafi: "7107",
      numero: "88",
    },
  ];

  return (
    <>
      {cepMock.map((cep) => (
        <>
          <section id="list-section" class="list-container">
            <div class="card-list-item">
              <h3>São Paulo</h3>
              <p class="address-line">Rua dos jardins,720</p>
              <p class="address-cep">11200-345</p>
            </div>
          </section>
        </>
      ))}


      {/* modal */}

      <section id="modal-contact" class="modal-container ">
        <div class="modal-box">
          <div class="modal-content">
            {/* formulario   */}

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
                  <div class="btn-container">
                    <button name="btnSave" class="btn btn-left" type="submit">
                      Salvar
                    </button>
                    <button name="btnClear" class="btn btn-right">
                      Limpar
                    </button>
                  </div>
                </form>
              </div>
            </section>

            {/* ///////// */}
          </div>
          <button id="modal-contact-close" class="btn">
            Fechar
          </button>
        </div>

      </section>

      
    </>
  );
};

export default ListCep;
