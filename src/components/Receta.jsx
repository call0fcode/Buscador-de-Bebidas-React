import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Receta = ({ receta }) => {
  const { setIdReceta } = useContext(ModalContext);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            }}
          >
            <Box sx={style}>
              <h1>Aquí datos de receta</h1>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
