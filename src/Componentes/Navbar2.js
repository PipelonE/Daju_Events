import React from "react"
import { Link } from "react-router-dom";
import '../Estilos/navbar.css';
import Logo from '../Imagenes/Logo.png';
import {useRef, useState, useEffect} from "react";
import foto_perfil from '../Imagenes/usuario-de-perfil.png';


export const Navbar2 = () => {
    const [background, setbackground] = useState("transparent")
    const refheader = useRef();

    useEffect(() => {
        const scrollchange =(e) =>{
            var scroll = window.scrollY
            if(scroll>10){
                var backgroundcolor = '#121212'
            }else{
                var backgroundcolor = 'transparent'
            }
            setbackground(backgroundcolor);
        }

        window.addEventListener('scroll', scrollchange);
        return () => {
            window.removeEventListener('scroll', scrollchange);
        }
    })

    return (
        <header className="cabecera" id="cabecera" ref={refheader} style={{backgroundColor: background}}>
            <div className="iden_per">
                <img src={Logo} className="menu-icono" alt=""/>
                <div>
                    <li className="item">
                        <i>
                            <Link to="/Perfil">
                                <img src={foto_perfil} className="foto_per"/>
                            </Link>
                        </i>
                    </li>
                </div>
            </div>
            <ul className="menu">
                <li className="btn_login"><i href="."><Link to="/">Conocenos</Link></i></li>
            </ul>
        </header>
    )
}
export default Navbar2