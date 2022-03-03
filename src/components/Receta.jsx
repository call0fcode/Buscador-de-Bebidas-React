import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "scroll",
  height: "100%",
  maxHeight: "80vh",
  maxWidth: "90vw",
  display: "block",
  p: 4,
};

const Receta = ({ receta }) => {
  const { infoReceta, setIdReceta, setInfoReceta } = useContext(ModalContext);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Muestra y formatea los ingredientes.
  const mostrarIngredientes = (infoReceta) => {
    let ingredientes = [];

    for (let i = 1; i < 16; i++) {
      if (infoReceta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={i}>
            {infoReceta[`strIngredient${i}`]}: {infoReceta[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredientes;
  };

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
              handleOpen();
            }}
          />

          <Modal
            open={open}
            onClose={() => {
              handleClose();
              setIdReceta(null);
              setInfoReceta({});
            }}
          >
            <Box sx={style}>
              <h2 className="mb-4">{infoReceta.strDrink}</h2>
              <h3>Instrucciones</h3>
              <p>{infoReceta.strInstructions}</p>
              <img className="img-fluid my-4" src={infoReceta.strDrinkThumb} />
              <h3>Ingredientes y cantidades</h3>
              <ul>{mostrarIngredientes(infoReceta)}</ul>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
