import React, { useContext, useState } from "react";

// Context
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { categorias } = useContext(CategoriasContext);

  // Leer los contenidos del formulario
  const obtenerDatosReceta = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="col-12">
      <fieldset className="text-center mb-4">
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>

      <div className="d-grid gap-2 d-md-flex gap-md-0 row">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>

        <div className="col-md-4">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map((categoria) => (
              <option value={categoria.strCategory} key={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 d-grid">
          <input
            type="submit"
            className="btn btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
