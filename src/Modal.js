import React from 'react';
import './modal.css'


function Modal (props) {
   return ( 
   <div className="divAfuera" onClick={(e)=>{
       if ( e.target.getAttribute("class")==="divAfuera"){
           props.close()
       }
   }}>
        <div className="divAdentro">
        <div className="divImagen">
        <img src={props.item} alt="img" className="imgModal"/>
        </div>
        <div className="divTexto">
        <p>holi holi holi</p>
        </div>

        </div>
    </div>
    )
}

export default Modal