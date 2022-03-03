import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [idReceta, setIdReceta] = useState(null);
  const [infoReceta, setInfoReceta] = useState({});

  // Llamar la API una vez que tenemos un ID de receta.
  useEffect(() => {
    // Evita ejecución en el primer render ya que no hay receta seleccionada.
    if (!idReceta) return;

    const obtenerReceta = async () => {
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        const resultado = await axios.get(url);
        setInfoReceta(resultado.data.drinks[0]);
      } catch (error) {
        console.log(error.message);
      }
    };
    obtenerReceta();
  }, [idReceta]);

  return (
    <ModalContext.Provider value={{ infoReceta, setIdReceta, setInfoReceta }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
