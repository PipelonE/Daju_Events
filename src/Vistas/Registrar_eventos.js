import React, { useState } from 'react';
import '../Estilos/regis_events.css';
import Navbar from "../Componentes/Navbar";
import Slider from '../Componentes/Slider';

function Registrar_eventos() {
  const [formData, setFormData] = useState({
    usuario_id: 1,
    nombre_evento: '',
    fecha_e: '',
    hora_inicio: '',
    hora_fin: '',
    lugar_id: '',
    participantes_e: '',
    descripcion_e: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/RegistrarEvento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        alert('Evento registrado con éxito');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Error al registrar el evento');
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
        <div className='formu'>
          <h6 className="regis_events">Registre el evento</h6><br />
          <form className="cont_info" onSubmit={handleSubmit}>
            <div className="info_form">
              <div>
                <label htmlFor="pname">Nombre</label>
                <input id="pname" type="text" name="nombre_evento" value={formData.nombre_evento} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="fecha_evento">Fecha</label>
                <input id="fecha_evento" type="date" name="fecha_e" value={formData.fecha_e} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="hora_inicio">Hora Inicio</label>
                <input id="hora_inicio" type="text" name="hora_inicio" value={formData.hora_inicio} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="hora_fin">Hora Fin</label>
                <input id="hora_fin" type="text" name="hora_fin" value={formData.hora_fin} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="lugar">Lugar</label>
                <input list="lugar" name="lugar_id" value={formData.lugar_id} onChange={handleChange} />
                <datalist id="lugar">
                  <option value="1">Auditorio c</option>
                  <option value="2">Jadin de eventos</option>
                  <option value="3">Salon de baile</option>
                </datalist>
              </div>
              <div>
                <label htmlFor="participantes">Participantes</label>
                <input id="participantes" type="text" name="participantes_e" value={formData.participantes_e} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="descripcion">Descripción</label>
                <input id="descripcion" type="text" name="descripcion_e" value={formData.descripcion_e} onChange={handleChange} />
              </div>
              <div className="btn">
                <button className="button_regis_e" type="submit" id="btn_regis">Registrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registrar_eventos;
