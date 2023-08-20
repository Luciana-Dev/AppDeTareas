import React, { useState } from 'react';
import '../HojasDeEstilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {
const [input, setInput] = useState('');
const manejarCambio = e => {
setInput(e.target.value);
console.log(e.target.value)
}
const manejarEnvio = e => {
  e.preventDefault();

  const tareaNueva ={
    id: uuidv4(),
    texto: input,
    completada: false
  }
  props.onSubmit(tareaNueva);
}

    return (
        <form className='tareaformulario'
        onSubmit={manejarEnvio}
        >
          <input 
          className='tareainput' 
          type='text' 
          placeholder='Escribe una Tarea' 
          name='texto' 
          onChange={manejarCambio}
          />

          <button className='tareaboton'>
            Agragar Tarea
          </button>
  
            
        </form>
    );
}

export default TareaFormulario;