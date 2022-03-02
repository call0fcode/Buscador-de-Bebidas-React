import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);
  const [busquedaRecetas, setBusquedaRecetas] = useState({});

  const { nombre, categoria } = busquedaRecetas;

  useEffect(() => {
    if (Object.keys(busquedaRecetas).length !== 0) {
      // Consulta la API una vez se reciben los datos desde el form.
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resultados = await axios.get(url);
        setRecetas(resultados.data.drinks);
      };
      obtenerRecetas();
    }
  }, [busquedaRecetas]);

  return (
    <RecetasContext.Provider value={{ recetas, setBusquedaRecetas }}>
      {children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
