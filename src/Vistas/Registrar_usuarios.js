import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../Estilos/regis_events.css';
import Navbar from "../Componentes/Navbar";
import Slider from '../Componentes/Slider';

function Registrar_usuario() {
  const [formData, setFormData] = useState({
    Nombres: '',
    Apellidos: '',
    pkfk_tdoc: '',
    numero_id: '',
    celular: '',
    correo: '',
    direccion: '',
    participantes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //  número de celular
    if (name === "celular") {
      if (!/^\d{10}$/.test(value)) {
        return;
      }
    }

    // correo electrónico
    if (name === "correo") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return;
      }
    }

   //cedula
    if (name === "numero_id") {
      if (!/^\d{8,15}$/.test(value)) {
        return;
      }
    }

    //mayuscula Nombres o Apellidos
    if (name === "Nombres" || name === "Apellidos") {
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      setFormData({ ...formData, [name]: capitalizedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/RegistrarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Usuario registrado con éxito'
        });

        // Limpiar el formulario
        setFormData({
          Nombres: '',
          Apellidos: '',
          pkfk_tdoc: '',
          numero_id: '',
          celular: '',
          correo: '',
          direccion: '',
          participantes: ''
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al registrar usuario'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error interno del servidor'
      });
    }
  };

  return (
    <div>
      <Navbar />
      <Slider />
      <h1 className="categoria">Eventos</h1><br />
      <div className='container'>
        <div className='formu'>
          <h6 className="regis_events">Registre el usuario</h6><br />
          <form className="cont_info" onSubmit={handleSubmit}>
            <div className="info_form">
              <div>
                <label htmlFor="pname">Nombres</label>
                <input id="pname" type="text" name="Nombres" value={formData.Nombres} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="psurname">Apellidos</label>
                <input id="psurname" type="text" name="Apellidos" value={formData.Apellidos} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="tdocument">Tipo de documento</label>
                <input list="tdoc-options" name="pkfk_tdoc" value={formData.pkfk_tdoc} onChange={handleChange} />
                <datalist id="tdoc-options">
                  <option value="TI">T.I</option>
                  <option value="CC">C.C</option>
                  <option value="RC">R.C</option>
                  <option value="CE">C.E</option>
                </datalist>
              </div>
              <div>
                <label htmlFor="ndocument">Numero de documento</label>
                <input id="ndocument" type="text" name="numero_id" value={formData.numero_id} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="ncelular">Numero de celular</label>
                <input id="ncelular" type="text" name="celular" value={formData.celular} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email">Correo Electronico</label>
                <input id="email" type="email" name="correo" value={formData.correo} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="dirección">Dirección</label>
                <input id="dirección" type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="participantes">Numero de eventos</label>
                <input id="participantes" type="text" name="participantes" value={formData.participantes} onChange={handleChange} />
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

export default Registrar_usuario;
