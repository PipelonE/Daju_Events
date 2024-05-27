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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Nombres || !formData.Apellidos || !formData.pkfk_tdoc || !formData.numero_id || !formData.celular || !formData.correo || !formData.direccion || !formData.eventos){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son requeridos'
      });
      return;
    }

    if (!/^\d{10}$/.test(formData.celular)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El número de celular debe tener 10 dígitos'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El correo electrónico no es válido'
      });
      return;
    }

    if (!/^\d{8,15}$/.test(formData.numero_id)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El número de documento debe tener entre 8 y 15 dígitos'
      });
      return;
    }

    // Convertir nombres y apellidos a mayúscula en la primera letra
    const formattedFormData = {
      ...formData,
      Nombres: formData.Nombres.charAt(0).toUpperCase() + formData.Nombres.slice(1),
      Apellidos: formData.Apellidos.charAt(0).toUpperCase() + formData.Apellidos.slice(1)
    };

    try {
      const response = await fetch('http://localhost:4000/RegistrarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedFormData)
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Usuario registrado con éxito'
        });

        navigate("/regis_event", { state: { numEventos: formData.eventos , usuarioiden: 8} });
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
                <label htmlFor="ndocument">Número de documento</label>
                <input id="ndocument" type="text" name="numero_id" value={formData.numero_id} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="ncelular">Número de celular</label>
                <input id="ncelular" type="text" name="celular" value={formData.celular} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email">Correo Electrónico</label>
                <input id="email" type="email" name="correo" value={formData.correo} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="direccion">Dirección</label>
                <input id="direccion" type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="eventos">Número de eventos</label>
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
