import { useState } from "react";

const ModalController = () => {
  const [isContainerOpen, setContainerIsOpen] = useState(false);

  const handleBtnCloseClick = () => {
    setContainerIsOpen(false);
  };
  const handleBtnOpenClick = () => {
    setContainerIsOpen(true);
  };
};

export default ModalController;
