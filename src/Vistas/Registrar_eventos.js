import React from 'react';
import '../Estilos/regis_events.css';
import Navbar from "../Componentes/Navbar";
import Slider from '../Componentes/Slider';

function Registrar_eventos() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <h1 className="categoria">Eventos</h1><br></br>
        <div className='container'>
          <div className='formu'>
            <h6 className="regis_events">Registre el evento</h6><br></br>
            <form className="cont_info">
              <div className="info_form">
                <div>
                  <label htmlFor="pname">Nombre</label>
                  <input id="pname" type="text" name="Nombres"/>
                </div>
                <div>
                  <label htmlFor="dfecha_evento">Fecha</label>
                  <input id="fecha_evento" type="date" name="fecha_nacimiento"/>
                </div>
                <div>
                  <label htmlFor="hora">Hora</label>
                  <input  id="hora" type="text" name="Hora"/>
                </div>
                <div>
                  <label htmlFor="lugar">Lugar</label>
                  <input list="lugar" name="pkfk_tdoc"/>
                    <datalist id="lugar">
                      <option value="Salon_Comunal">Salon Comunal</option>
                      <option value="Auditorio_A">Auditorio A</option>
                      <option value="Terraza">Terraza</option>
                      <option value="Jardin_Comunitario">Jardin Comunitario</option>
                    </datalist>
                </div>
                <div>
                  <label htmlFor="participantes">Participantes</label>
                  <input  id="participantes" type="text" name="Hora"/>
                </div>
                <div>
                  <label htmlFor="descripción">Descripción</label>
                  <input  id="descripción" type="text" name="Hora"/>
                </div>
                <div className="btn"><a className="button_regis_e" type="submit" id="btn_regis">Registrar</a></div>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Registrar_eventos