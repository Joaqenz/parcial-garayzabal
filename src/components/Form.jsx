import React from "react";
import { useState } from "react";

const Form = ({ onAddEstudiante }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const estudiante = {
      nombre,
      apellido,
    };
    if (nombre.length < 3 || nombre.trim() !== nombre || apellido.length < 6) {
      setError(true);
    } else {
      setError(false);
      onAddEstudiante(estudiante);
      setNombre("");
      setApellido("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
            style={{ marginBottom: "10px" }}
          />
        </div>

        <button>Agregar Estudiante</button>
      </form>
      {error && (
        <div style={{ marginTop: "20px" }}>
          Por favor chequea que la información sea correcta.
        </div>
      )}
    </>
  );
};

export default Form;
