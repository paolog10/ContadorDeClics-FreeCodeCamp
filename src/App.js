import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import { useState } from 'react'; //Hooks

function App() {
  const [numClics, setNumClics] = useState(0);
  
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo} 
          alt="Logo de freeCodeCamp" 
          className='freecodecamp-logo'
        />
      </div>

      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        ></Contador>
        
        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}
        ></Boton>

        <Boton 
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        ></Boton>
      </div>
    </div>
  );
}

export default App;
