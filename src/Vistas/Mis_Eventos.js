import React, { useState, useRef} from 'react';
import '../Estilos/eventos.css';
import Arrow from "../Imagenes/arrow.svg";
import Buscar from "../Imagenes/bx-search.svg";
import Navbar4 from '../Componentes/Navbar4';
import Slider from '../Componentes/Slider';
import word from '../Imagenes/doc.png';
import pdf from '../Imagenes/pdf.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatarFecha(fechaString) {
    const fecha = new Date(fechaString);
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
}

function Mis_eventos() {

    var refModal = useRef();
    var refModal2 = useRef();

    const Mostrar = (e) => {
        const myrefValue = refModal.current;
        myrefValue.style.display= "flex";
    };

    const Mostrar2 = (e) => {
        const myrefValue = refModal2.current;
        if(myrefValue.style.display == "none"){
            myrefValue.style.display = "block";
        }
        else{
            myrefValue.style.display = "none";
        }
        
    };

    const [busquedaevent, setBusquedaevent] = useState(null);
    const [nombrebusqueda, setNombrebusqueda] = useState("");

    const handleChange = (e) => {
        setNombrebusqueda(e.target.value);
    };

    const Buscar_event = async () => {
        const cadenaCodificada = encodeURIComponent(nombrebusqueda);
        try {
            const getbuscar = await fetch(`http://localhost:4000/Buscar_evento/${cadenaCodificada}`);
            const databuscar = await getbuscar.json();

            databuscar.nombre_evento = capitalizeFirstLetter(databuscar.nombre_evento);
            databuscar.fecha_e = formatarFecha(databuscar.fecha_e);

            setBusquedaevent(databuscar);
            console.log(databuscar);
            if(getbuscar.ok){
                Mostrar();
            }
        } catch (error) {
            console.log(error);
        }       
    };

    const generarPDF = async () => {
        const input = document.getElementById('pdfContent');
        if (input) {
            try {
                const canvas = await html2canvas(input);
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 210;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save(`${busquedaevent.nombre_evento}.pdf`);
            } catch (error) {
                console.error("Error generating PDF", error);
            }
        } else {
            console.error("Element with id 'pdfContent' not found");
        }
    };

    const generarWord = () => {
        if (busquedaevent) {
            const doc = new Document({
                sections: [
                    {
                        properties: {},
                        children: [
                            new Paragraph({
                                text: busquedaevent.nombre_evento,
                                heading: "Title",
                            }),
                            new Paragraph({
                                text: `Fecha: ${busquedaevent.fecha_e}`,
                                spacing: { after: 200 },
                            }),
                            new Paragraph({
                                text: `Lugar: ${busquedaevent.lugar_id}`,
                                spacing: { after: 200 },
                            }),
                            new Paragraph({
                                text: `Hora Inicio: ${busquedaevent.hora_inicio}`,
                                spacing: { after: 200 },
                            }),
                            new Paragraph({
                                text: `Hora Final: ${busquedaevent.hora_Fin}`,
                                spacing: { after: 200 },
                            }),
                            new Paragraph({
                                text: `Persona de Registro: Patricia Turbai`,
                                spacing: { after: 200 },
                            }),
                            new Paragraph({
                                text: `Participantes: ${busquedaevent.participantes_e}`,
                                spacing: { after: 200 },
                            }),
                            new Paragraph({
                                text: `Descripción: ${busquedaevent.descripcion_e}`,
                                spacing: { after: 200 },
                            }),
                        ],
                    },
                ],
            });

            Packer.toBlob(doc).then((blob) => {
                saveAs(blob, `${busquedaevent.nombre_evento}.docx`);
            });
        }
    };

    return (
        <div>
            <Navbar4/>
            <Slider/>
            <h1 className="tittle">Eventos</h1><br/>
            <div className="buscar">
                <input 
                    type="text" 
                    onChange={handleChange} 
                    value={nombrebusqueda} 
                    name="nombre_evento" 
                    placeholder="Ingrese el nombre" 
                    required 
                />
                <div className="buscar_icon" onClick={Buscar_event}>
                    <i><img src={Buscar} alt="Buscar" /></i>
                </div>
            </div><br />
            <div>
                {busquedaevent ? (
                    <section className="collag">
                        <div className="evento_location Barra-lateral_button--click" ref={refModal} onClick={Mostrar2}>
                            <a href="#!" className="Barra-lateral_link">{busquedaevent.nombre_evento}</a>
                            <img src={Arrow} className="Barra-lateral_arrow" alt="Arrow"/>
                        </div>
                        <div className="funciones" ref={refModal2}>
                            <div className='info_area' id="pdfContent">
                                <p className='description'>{busquedaevent.descripcion_e}</p>
                                <div className='info_event'>
                                    <div className='info'>
                                        <h6>Fecha</h6>
                                        <p>{busquedaevent.fecha_e}</p>
                                    </div>
                                    <div className='info'>
                                        <h6>Lugar</h6>
                                        <p>{busquedaevent.lugar_id}</p>
                                    </div>
                                    <div className='info'>
                                        <h6>Hora Inicio</h6>
                                        <p>{busquedaevent.hora_inicio}</p>
                                    </div><br></br>
                                    <div className='info'>
                                        <h6>Hora Final</h6>
                                        <p>{busquedaevent.hora_Fin}</p>
                                    </div>
                                    <div className='info'>
                                        <h6>Persona de Registro</h6>
                                        <p>Patricia turbai</p>
                                    </div>
                                    <div className='info'>
                                        <h6>participantes</h6>
                                        <p>{busquedaevent.participantes_e}</p>
                                    </div>
                                </div> 
                            </div>
                            <div className='generar_buttons'>
                                <div className="btn_e">
                                    <button className="button_word" type="submit" id="btn_crono" onClick={generarWord}>
                                        Generar Word
                                        <img className='icon_gen' src={word}  alt="Word"/>
                                    </button>
                                </div>
                                <div className="btn_e">
                                    <button className="button_pdf" type="button" id="btn_crono" onClick={generarPDF}>
                                        Generar PDF
                                        <img className='icon_gen' src={pdf} alt="PDF"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <div className='area_mensaje'>
                        <p className='mensaje_no_encontrado'>No se encontró ningún evento</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Mis_eventos;
