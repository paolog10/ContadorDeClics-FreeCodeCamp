import {React} from "react";
import "../hojas-de-estilo/Boton.css";

function Boton({texto, esBotonDeClic, manejarClic}) { //sintaxis de desestructuración
  return(
    <button
      className={ esBotonDeClic ? "boton-clic" : "boton-reiniciar" } //operador ternario    
      onClick={manejarClic}
    >
      {texto}
    </button>
  )
}

export default Boton; //exportacion por defecto(solo una vez)