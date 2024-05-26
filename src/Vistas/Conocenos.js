import React from 'react';
import '../Estilos/regis_events.css';
import Navbar3 from '../Componentes/Navbar3';
import Slider from '../Componentes/Slider';

function Conocenos() {
  return (
    <div>
      <Navbar3/>
      <Slider/>
      <div className="conocenos-container">
        <h2>Conócenos</h2>

        <section>
          <h3>¿Quiénes Somos?</h3>
          <p>En <strong>Daju Events</strong>, somos apasionados por crear momentos inolvidables. 
          Con más de 10 años de experiencia en la industria, nos especializamos en diseñar y ejecutar 
          eventos personalizados que superan las expectativas de nuestros clientes. Desde bodas y 
          cumpleaños hasta conferencias corporativas y lanzamientos de productos, nos enorgullece ofrecer
           un servicio integral y de alta calidad.</p>
        </section>

        <section>
          <h3>Nuestra Misión</h3>
          <p>Nuestra misión es transformar ideas en experiencias memorables.
             Trabajamos de la mano con nuestros clientes para entender sus necesidades y deseos, asegurándonos de
             
              que cada detalle esté cuidado a la perfección. Nuestro objetivo es no solo cumplir, sino exceder las expectativas,
               brindando eventos que dejen una huella duradera.</p>
        </section>

        <section>
          <h3>Nuestro Equipo</h3>
          <p>Contamos con un equipo de profesionales altamente capacitados y apasionados por su trabajo.
             Desde planificadores de eventos y diseñadores hasta técnicos y coordinadores logísticos, 
             cada miembro de nuestro equipo aporta su expertise y creatividad para garantizar el éxito de cada evento. 
             Nuestra dedicación y compromiso se reflejan en cada proyecto que realizamos.</p>
        </section>

        

        <section>
          <h3>Por Qué Elegirnos</h3>
          <ul>
            <li><strong>Experiencia:</strong> Más de una década creando eventos exitosos.</li>
            <li><strong>Personalización:</strong> Cada evento es único y lo diseñamos a medida.</li>
            <li><strong>Calidad:</strong> Compromiso con la excelencia en cada detalle.</li>
            <li><strong>Innovación:</strong> Siempre a la vanguardia en tendencias y tecnología.</li>
            <li><strong>Satisfacción Garantizada:</strong> La felicidad de nuestros clientes es nuestra prioridad número uno.</li>
          </ul>
        </section>

        <section>
          <h3>Testimonios</h3>
          <p><em>"Daju Events hizo de nuestra boda un día verdaderamente mágico. Su atención al detalle y profesionalismo fueron excepcionales.
            "</em> - <strong>María y José</strong></p>
          <p><em>"Contratar a Daju Events para nuestra conferencia anual fue la mejor decisión. Todo salió perfecto y nuestros asistentes quedaron encantados.
            "</em> - <strong>Laura, Empresa XYZ</strong></p>
        </section>

        <section>
          <h3>Contacto</h3>

          <p>Síguenos en nuestras redes sociales para inspirarte y conocer más sobre nuestros proyectos recientes:</p>
          <ul>
            <li><strong>Facebook:</strong> @DajuEvents</li>
            <li><strong>Instagram:</strong> @DajuEvents</li>
            <li><strong>Twitter:</strong> @DajuEvents</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Conocenos;
