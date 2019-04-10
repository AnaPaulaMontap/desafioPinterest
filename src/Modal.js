import React from 'react';
import puntos from './img/puntos.png'
import box from './img/outBox.png'
import arrow from './img/arrow.png'
import elefanta from './img/elefantita.jpg'
import backArrow from './img/backarrow.png'
import './modal.css'


function Modal (props) {
   return ( 
   <div className="divAfuera" onClick={(e)=>{
       if ( e.target.getAttribute("class")==="divAfuera"){
           props.close()
       }
   }}>
    <img src={backArrow}   alt="icono" className="backArrow" onClick={props.close}/>
        <div className="divAdentro">
        <div className="divNavbar">
       
        <img src={puntos}   alt="icono" className="iconosModal"/>
       
        <img src={box} alt="icono" className="iconoBox"/>    
        <span className="textoModal">Enviar</span>
     
        <span className="textModal">Categorías</span>
        <img src={arrow} alt="icono" className="iconoArrow"/>
        <span className="saveModal">Guardar</span>

       </div>
        <div className="divImagen">        
        <img src={props.item} alt="img" className="imgModal"/>
        </div>
        <div className="divTexto">
        <p className="page"> Instagram.com</p>
        <hr className="line" />
        <p className="titulo">Fotos y comentarios</p>
        <span className="select">Fotos</span> <span className="noSelect"> Comentarios</span>
        <div>
        <p className="parrafo">¿Has probado este Pin? Añade una foto para mostrar cómo ha ido</p>
        <span className="plus">Añadir una <br/> foto</span>
        <hr className="line" />
        <img src={elefanta} alt="img" className="userModal"/>
        <p className="parrafoUser"><strong>Heffalump</strong> a guardado este pin en <strong>Titanic</strong></p>
        
        </div>
        
        </div>

        </div>
    </div>
    )
}

export default Modal