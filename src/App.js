import Registrar_eventos from "./Vistas/Registrar_eventos";
import Mis_eventos from "./Vistas/Mis_Eventos";
import Registrar_usuario from "./Vistas/Registrar_usuarios";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <header>
      <Routes>
        <Route path="/" element={<Mis_eventos/>}></Route>
        <Route path="/regis_event" element={<Registrar_eventos/>}></Route>
        <Route path="/regis_usuario" element={<Registrar_usuario/>}></Route>
      </Routes>
    </header>
  );
}

export default App;
