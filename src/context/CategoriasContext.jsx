import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  // Consulta la API solo con el primer render del componente.
  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const url =
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
        const categorias = await axios.get(url);
        setCategorias(categorias.data.drinks);
      } catch (error) {
        console.log(error.message);
      }
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
