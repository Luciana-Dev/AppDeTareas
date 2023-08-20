import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import freecodecamplogo from './imagenes/logo.png';


function App() {

  return (
<div className= 'aplicaciontareas'> 
  <div className='frecodecamplogocontenedor'>
    <img src={freecodecamplogo} className='freecodecamplogo' />
  </div>

  <div className='tareaslistaprincipal'>
    <h1>Mis Tareas</h1>
    <ListaDeTareas></ListaDeTareas>
    

  </div>
  
</div>
  )
}

export default App
