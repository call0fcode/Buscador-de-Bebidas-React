import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Receta = ({ receta }) => {
  const { setIdReceta } = useContext(ModalContext);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />
        <div className="card-body d-grid">
          <input
            type="button"
            className="btn btn bg-primary text-white"
            value="Ver Receta"
            onClick={() => {
              setIdReceta(receta.idDrink);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Receta;
