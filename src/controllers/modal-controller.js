import { useState } from "react";

const ModalController = () => {
  const [isContainerOpen, setContainerIsOpen] = useState(false);

  const closeButton = () => {
    setContainerIsOpen(false);
  };
  const signInButton = () => {
    setContainerIsOpen(true);
  };
};

export default ModalController;
