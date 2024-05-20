import Registrar_eventos from "./Vistas/Registrar_eventos";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <header>
      <Routes>
        <Route path="/" element={<Registrar_eventos/>}></Route>
      </Routes>
    </header>
  );
}

export default App;
