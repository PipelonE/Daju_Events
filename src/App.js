import Registrar_eventos from "./Vistas/Registrar_eventos";
import Mis_eventos from "./Vistas/Mis_Eventos";
import Registrar_usuario from "./Vistas/Registrar_usuarios";
import Conocenos from "./Vistas/Conocenos";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <header>
      <Routes>
        <Route path="/" element={<Conocenos/>}></Route>
        <Route path="/regis_event" element={<Registrar_eventos/>}></Route>
        <Route path="/regis_usuario" element={<Registrar_usuario/>}></Route>
        <Route path="/generar_reportes" element={<Mis_eventos/>}></Route>
      </Routes>
    </header>
  );
}

export default App;
