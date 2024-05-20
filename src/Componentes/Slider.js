import React from 'react'
import '../Estilos/slider.css';
import Slider_1 from '../Imagenes/Imagen 1.jpeg'
import Slider_2 from '../Imagenes/Imagen 2.jpeg'
import Slider_3 from '../Imagenes/Imagen 3.jpeg'
import Slider_4 from '../Imagenes/Imagen 4.jpeg'
import Slider_5 from '../Imagenes/Imagen 5.jpeg'
import Slider_6 from '../Imagenes/Imagen 6.jpeg'
import Slider_7 from '../Imagenes/Imagen 7.jpeg'

function Slider() {
  return (
    <div className='slider'>
        <ul>
            <li><img src={Slider_1} alt=""/></li>
            <li><img src={Slider_2} alt=""/></li>
            <li><img src={Slider_3} alt=""/></li>
            <li><img src={Slider_4} alt=""/></li>
            <li><img src={Slider_5} alt=""/></li>
            <li><img src={Slider_6} alt=""/></li>
            <li><img src={Slider_7} alt=""/></li>
        </ul>
    </div>
  )
}

export default Slider