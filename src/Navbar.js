import React from 'react';
import './Navbar.css'
import logo from './img/pinterest-logo.png'
import lupa from './img/lupa-vector-1.png'
import puntos from './img/puntos.png'
import messenger from './img/Message_gray-512.png'
import campana from './img/gray-bell-png-11.png'

function Navbar () {
 return (
     <div className="section"> 
     <img src={logo}    alt="icono" className="image"/>

       <div className="inputBox">
       <img src={lupa}  alt="lupa" className="lupa"/>
       <input type="text" className="input" placeholder="Buscar" /> 
       </div> 
       <div className="buttonBox">
       <span className="buttonText">Inicio</span>
       <span className="buttonText">Siguiendo</span>       
       </div>
       <div className="nameText">
       <span className="user letter">A</span>
       <span className="user">Ana</span>
       </div>
       <div className="iconBox">
        <img src={messenger}    alt="icono" className="iconos"/>
       <img src={campana}    alt="icono" className="iconos"/>
       <img src={puntos}    alt="icono" className="iconos"/>
       </div>
       

        
        

      </div>
 )

}

export default Navbar