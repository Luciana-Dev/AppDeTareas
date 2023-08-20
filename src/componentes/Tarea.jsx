import React from 'react';
import '../HojasDeEstilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
    return (
        <div className={completada ? 'tareacontenedor completada' : 'tareacontenedor'} >
            <div className='tareatexto'
            onClick={() => completarTarea(id)}
            
            >
                {texto}
            </div>
            <div className='tareacontenedoriconos' 
            onClick={() => eliminarTarea (id)}
            > <AiOutlineCloseCircle className='tareaicono'/> 
            
            </div>
            
        </div>
    );
}

export default Tarea;