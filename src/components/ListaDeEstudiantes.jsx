import React from "react";
import Card from "./Card";

const ListaDeEstudiantes = ({ estudiantes }) => {
  return (
    <div>
      <h2>Lista de estudiantes</h2>
      {estudiantes.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {estudiantes.map((estudiante, index) => (
            <div key={index}>
              <Card estudiante={estudiante} />
            </div>
          ))}
        </div>
      ) : (
        <p>No se registran estudiantes cargados.</p>
      )}
    </div>
  );
};

export default ListaDeEstudiantes;
