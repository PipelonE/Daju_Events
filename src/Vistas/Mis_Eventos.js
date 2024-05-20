import React from 'react';
import '../Estilos/eventos.css';
import Arrow from "../Imagenes/arrow.svg";
import Buscar from "../Imagenes/bx-search.svg";
import Navbar from "../Componentes/Navbar";
import Slider from '../Componentes/Slider';
import word from '../Imagenes/doc.png';
import pdf from '../Imagenes/pdf.png';

function Mis_eventos() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <h1 className="tittle">Eventos</h1><br></br>
        <div className="buscar">
            <input type="text" name="numero_id" placeholder="Ingrese el nombre" required />
            <div className="buscar_icon">
                <i><img src={Buscar} alt="Buscar" /></i>
            </div>
        </div><br />
        <div>
            <section className="collag">
                <div className="evento_location Barra-lateral_button--click">
                    <a href="#!" className="Barra-lateral_link">Fiesta de 15 años Valery</a>
                    <img src={Arrow} className="Barra-lateral_arrow"/>
                </div>
                <div className="funciones">
                    <div className='info_area'>
                        <p className='description'>Fiesta de 15 años de valery , unicamente permitir acceso a personas contraje y regalo.</p>
                        <div className='info_event'>
                            <div className='info'>
                                <h6>Fecha</h6>
                                <p>12/06/2024</p>
                            </div>
                            <div className='info'>
                                <h6>Lugar</h6>
                                <p>Auditorio C</p>
                            </div>
                            <div className='info'>
                                <h6>Hora</h6>
                                <p>4:00 PM</p>
                            </div>
                            <div className='info'>
                                <h6>Numero de participantes</h6>
                                <p>120 Personas</p>
                            </div>
                        </div> 
                        <div className='generar_buttons'>
                            <div className="btn"><button className="button_word" type="submit" id="btn_crono">Generar Word<img className='icon_gen' src={word}  alt="Word"/></button></div>
                            <div className="btn"><button className="button_pdf" type="submit" id="btn_crono">Generar PDF<img className='icon_gen' src={pdf} alt="PDF"/></button></div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    </div>
  )
}

export default Mis_eventos;