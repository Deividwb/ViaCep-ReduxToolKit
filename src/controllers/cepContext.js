import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const cepContext = createContext({});
cepContext.displayName = "ViaCep";

export function CepProvider({ children }) {
  const [isContainerOpen, setContainerIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    numero: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://viacep.com.br/ws/${formData.cep}/json/`)
      .then((response) => {
        setFormData(response.data);
        console.log(formData);
      })
      .catch(() => {
        toast.warning("Informe Cep Correto");
        setFormData(undefined);
      });

    if (!formData.cep) {
      return toast.warning("Informe Cep Correto");
    } else {
      setFormData({ ...formData, handleInputChange });
      // setFormData(undefined);
    }
  };

  function handleBtnCloseClick() {
    setContainerIsOpen(false);
  }

  const handleBtnOpenClick = () => {
    toast.warning("Preencha os Campos");
    setContainerIsOpen(true);
  };

  const handleInputChange = (e) => {
    let newProp = formData;
    newProp[e.target.name] = e.target.value;
    setFormData({ ...newProp });
  };

  return (
    <cepContext.Provider
      value={{
        handleBtnOpenClick,
        handleBtnCloseClick,
        isContainerOpen,
        formData,
        setFormData,
        handleInputChange,
        handleSubmit,
      }}
    >
      {children}
    </cepContext.Provider>
  );
}
