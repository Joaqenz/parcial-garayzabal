import { useState } from "react";
import ListaDeEstudiantes from "./components/ListaDeEstudiantes";
import Form from "./components/Form";

function App() {
  const [estudiantes, setEstudiantes] = useState([]);

  const handleAddEstudiante = (estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Carga de estudiantes</h1>
      <Form onAddEstudiante={handleAddEstudiante} />
      <ListaDeEstudiantes estudiantes={estudiantes} />
    </div>
  );
}

export default App;
