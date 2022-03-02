import React from "react";

const Formulario = () => {
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
          />
        </div>

        <div className="col-md-4">
          <select name="categoria" className="form-control">
            <option value="">-- Selecciona Categoría --</option>
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
