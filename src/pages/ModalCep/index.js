import './styles.css'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function ModalCep({ isActive, isClose }) {
  const [formData, setFormData] = useState({
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    numero: '',
  })

  const [arrayCep, setArrayCep] = useState([])

  const handleInputChange = (e) => {
    let newProp = formData
    newProp[e.target.name] = e.target.value
    setFormData({ ...newProp })
  }

  const handleClear = () => {
    alert('Deu certo')
  }

  // const handleFormCepSubmit = (event) => {
  //   event.preventDefault()
  //   setArrayCep((oldCep) => [...oldCep, formData])

  //   setFormData({
  //     cep: '',
  //   })
  //   console.log(formData)
  //   console.log('===============')
  //   console.log(arrayCep)
  // }

  //  cep: 0,
  //     street: "",
  //     number: 0,
  //     city: "",

  // async function loadCep() {
  //   const response = await api.get("/01001000/json");
  //   console.log(response.data);
  // }

  // useEffect(() => {

  // }, [])

  // const inputCep = document.forms.newAddress.cep;
  // console.log("inputCep", inputCep.value);

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .get(`https://viacep.com.br/ws/${formData.cep}/json/`)
      .then((response) => {
        setFormData(response.data)
        console.log(formData)
      })
      .catch(() => {
        toast.warning('Informe Cep Correto')
      })

    if (!formData.cep) {
      return toast.warning('Informe Cep Correto')
    } else {
      setArrayCep((oldCep) => [...oldCep, arrayCep])
      setArrayCep('')
      console.log(arrayCep)
    }
  }

  return (
    <section
      id="modal-contact"
      class={`modal-container ${isActive === true ? 'active' : ''}`}
    >
      <div class="modal-box">
        <div className="modal-content">
          <section id="form-section" class="form-container">
            <div className="card-form">
              <form onSubmit={'handleFormCepSubmit'} name="newAddress">
                <div className="form-control">
                  <label for="cep">CEP:</label>
                  <input
                    name="cep"
                    id="cep"
                    class="form-input"
                    type="text"
                    placeholder="CEP"
                    value={formData?.cep}
                    onChange={handleInputChange}
                  />
                  <div class="error-message" data-error="cep"></div>
                </div>
                <div class="form-control">
                  <label for="street">Logradouro:</label>
                  <input
                    name="logradouro"
                    id="logradouro"
                    class="form-input"
                    type="text"
                    placeholder="Logradouro"
                    value={formData?.logradouro}
                    onChange={handleInputChange}
                    // disabled
                  />
                </div>
                <div class="form-control">
                  <label for="number">Número:</label>
                  <input
                    name="numero"
                    id="numero"
                    class="form-input"
                    type="text"
                    placeholder="Número"
                    value={formData?.numero}
                    onChange={handleInputChange}
                  />
                  <div class="error-message" data-error="number"></div>
                </div>
                <div class="form-control">
                  <label for="city">Cidade:</label>
                  <input
                    name="localidade"
                    id="localidade"
                    class="form-input"
                    type="text"
                    placeholder="Cidade"
                    value={formData?.localidade}
                    onChange={handleInputChange}
                    // disabled
                  />
                </div>
                <div className="btn-container ">
                  <button
                    name="btnSave"
                    className=" effect effect-2 "
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Salvar
                  </button>
                  <button
                    name="btnClear"
                    className="effect effect-2"
                    onClick={handleClear}
                  >
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
  )
}
