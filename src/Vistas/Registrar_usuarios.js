import React from 'react';
import '../Estilos/regis_events.css';
import Navbar from "../Componentes/Navbar";
import Slider from '../Componentes/Slider';

function Registrar_usuario() {
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
                    <label htmlFor="pname">Nombres</label>
                    <input id="pname" type="text" name="Nombres"/>
                </div>
                <div>
                    <label htmlFor="psurname">Apellidos</label>
                    <input id="psurname" type="text" name="Apellidos"/>
                </div>
                <div>
                    <label htmlFor="tdocument">Tipo de documento</label>
                    <input list="tdocument" name="pkfk_tdoc"/>
                    <datalist id="tdocument">
                        <option value="TI">T.I</option>
                        <option value="CC">C.C</option>
                        <option value="RC"> R.C</option>
                        <option value="CE">C.E</option>
                    </datalist>
                </div>
                <div>
                    <label htmlFor="ndocument">Numero de documento</label>
                    <input id="ndocument" type="text" name="numero_id"/>
                </div>
                <div>
                    <label htmlFor="ncelular">Numero de celular</label>
                    <input id="ncelular" type="text" name="celular"/>
                </div>
                <div>
                    <label htmlFor="email">Correo Electronico</label>
                    <input id="email" type="email" name="correo"/>
                </div>
                <div>
                    <label htmlFor="dirección">Dirección</label>
                    <input id="dirección" type="text" name="direccion"/>
                </div>
                <div>
                    <label htmlFor="participantes">Numero de eventos</label>
                    <input id="participantes" type="text" name="participantes"/>
                </div>
                <div className="btn"><a className="button_regis_e" type="submit" id="btn_regis">Registrar</a></div>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Registrar_usuario