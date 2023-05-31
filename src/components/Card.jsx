import React from "react";

const Card = ({ estudiante }) => {
  return (
    <div
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        boxShadow: "10px 10px 15px -8px rgba(0,0,0,0.24)",
      }}
    >
      <div>Nombre: {estudiante.nombre}</div>
      <div>Apellido: {estudiante.apellido}</div>
    </div>
  );
};

export default Card;
