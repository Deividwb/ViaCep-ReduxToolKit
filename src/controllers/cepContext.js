import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const cepContext = createContext({})
cepContext.displayName = 'ViaCep'

export function CepProvider({ children }) {
  const [isContainerOpen, setContainerIsOpen] = useState(false)

  function handleBtnCloseClick() {
    setContainerIsOpen(false)
  }

  const handleBtnOpenClick = () => {
    toast.warning('Preencha os Campos')
    setContainerIsOpen(true)
  }

  return (
    <cepContext.Provider
      value={{
        handleBtnOpenClick,
        handleBtnCloseClick,
        isContainerOpen,
      }}
    >
      {children}
    </cepContext.Provider>
  )
}
