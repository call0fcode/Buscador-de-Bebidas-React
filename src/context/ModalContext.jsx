import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [idReceta, setIdReceta] = useState(null);

  return (
    <ModalContext.Provider value={{ setIdReceta }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
