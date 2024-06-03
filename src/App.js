import './App.css';
import FreeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Tarea from './componentes/Tarea'

function App() {
  return (
    <div className="app-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
        src= {FreeCodeCampLogo} 
        className='freecodecamp-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <Tarea texto='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
