import {useState} from 'react';
import {ToDoEdit} from './ToDoEdit';

export const ToDoListItem = ({todo, index, handleDelete, handleToggle, handleEditTodo}) => {
    const [formulario, setFormulario] = useState(false)
    
    const handleFormulario = () => {
        setFormulario(!formulario)
    }
    const colocarFormulario = () => {
        if(formulario) {
            return (
                <>
                    <ToDoEdit handleEditTodo={handleEditTodo} toDo={todo} handleFormulario={handleFormulario}/>
                </>
            )
        }
        else {
            return (
                <div>
                    <p
                        className={`${todo.done && 'complete'}`}
                        onClick={()=>handleToggle(todo.id)}
                    >
                        {index+1}. {todo.desc}
                    </p>
                    <button 
                        className="btn"
                        onClick={handleFormulario}
                    >
                        Editar
                    </button>
                </div>
            )
        }
        
    }

    return (
        <>
            <li
                key={todo.id}
                className="list-group-item form-false"
            >
                {colocarFormulario()}
                <button 
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                >
                    Borrar
                </button>
            </li>
        </>
    )
}
