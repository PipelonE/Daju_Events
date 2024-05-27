import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../Estilos/regis_usuario.css';
import Navbar from "../Componentes/Navbar";
import Slider from '../Componentes/Slider';
import { useNavigate } from "react-router-dom";

function Registrar_usuario() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Nombres: '',
    Apellidos: '',
    pkfk_tdoc: '',
    numero_id: '',
    celular: '',
    correo: '',
    direccion: '',
    eventos: ''
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

        navigate("/regis_event", { state: { numEventos: formData.eventos } });
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
      <h1 className="categoria_u">Eventos</h1><br />
      <div className='container_u'>
        <div className='formu_u'>
          <h6 className="regis_events_u">Registre el usuario</h6><br />
          <form className="cont_info_u" onSubmit={handleSubmit}>
            <div className="info_form_u">
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
                <label htmlFor="eventos">Numero de eventos</label>
                <input id="eventos" type="text" name="eventos" value={formData.eventos} onChange={handleChange} />
              </div>
              <div className="btn_u">
                <button className="button_regis_u" type="submit" id="btn_regis">Registrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registrar_usuario;
