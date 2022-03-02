import React, { createContext, useState } from "react";

export const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);
  const [busquedaRecetas, setBusquedaRecetas] = useState({
    nombre: "",
    categoria: "",
  });

  return (
    <RecetasContext.Provider value={{ setBusquedaRecetas }}>
      {children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
