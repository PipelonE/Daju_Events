import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Estilos/regis_events.css';
import Navbar from "../Componentes/Navbar";
import Slider from '../Componentes/Slider';

function Registrar_eventos() {

  const location = useLocation();
  const numEventos = location.state?.numEventos || 1;  // Por defecto 1 si no se especifica
  const initialFormData = {
    usuario_id: 14,
    nombre_evento: '',
    fecha_e: '',
    hora_inicio: '',
    hora_fin: '',
    lugar_id: '',
    participantes_e: '',
    descripcion_e: ''
  };

  const [formsData, setFormsData] = useState(Array.from({ length: numEventos }, () => initialFormData));

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFormsData = [...formsData];
    newFormsData[index] = {
      ...newFormsData[index],
      [name]: value
    };
    setFormsData(newFormsData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responses = await fetch('http://localhost:4000/RegistrarEvento', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formsData)
      });

      console.log(formsData)

      const allSuccessful = responses.every(response => response.ok);
      if (allSuccessful) {
        alert('Todos los eventos fueron registrados con éxito');
      } else {
        alert('Error al registrar uno o más eventos');
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('Error de red');
    }
  };

  return (
    <div>
      <Navbar />
      <Slider />
      <h1 className="categoria">Eventos</h1><br />
      <div className='container'>
        {formsData.map((formData, index) => (
          <div className='formu' key={index}>
            <h6 className="regis_events">Registre el evento</h6><br />
            <form className="cont_info">
              <div className="info_form">
                <div>
                  <label htmlFor={`pname_${index}`}>Nombre</label>
                  <input id={`pname_${index}`} type="text" name="nombre_evento" value={formData.nombre_evento} onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label htmlFor={`fecha_evento_${index}`}>Fecha</label>
                  <input id={`fecha_evento_${index}`} type="date" name="fecha_e" value={formData.fecha_e} onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label htmlFor={`hora_inicio_${index}`}>Hora Inicio</label>
                  <input id={`hora_inicio_${index}`} type="text" name="hora_inicio" value={formData.hora_inicio} onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label htmlFor={`hora_fin_${index}`}>Hora Fin</label>
                  <input id={`hora_fin_${index}`} type="text" name="hora_fin" value={formData.hora_fin} onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label htmlFor={`lugar_${index}`}>Lugar</label>
                  <input list={`lugar_${index}`} name="lugar_id" value={formData.lugar_id} onChange={(e) => handleChange(index, e)} />
                  <datalist id={`lugar_${index}`}>
                    <option value="1">Auditorio c</option>
                    <option value="2">Jadin de eventos</option>
                    <option value="3">Salon de baile</option>
                  </datalist>
                </div>
                <div>
                  <label htmlFor={`participantes_${index}`}>Participantes</label>
                  <input id={`participantes_${index}`} type="text" name="participantes_e" value={formData.participantes_e} onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label htmlFor={`descripcion_${index}`}>Descripción</label>
                  <input id={`descripcion_${index}`} type="text" name="descripcion_e" value={formData.descripcion_e} onChange={(e) => handleChange(index, e)} />
                </div>
              </div>
            </form>
          </div>
        ))}
        <div className="btn">
          <button className="button_regis_e" type="button" onClick={handleSubmit}>Registrar</button>
        </div>
      </div>
    </div>
  );
}

export default Registrar_eventos;
