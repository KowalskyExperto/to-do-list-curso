import { useForm } from '../hooks/useForm';
import {IconButton, TextField} from '@material-ui/core';
export const ToDoEdit = ({handleEditTodo,toDo, handleFormulario}) => {
    
    const [{description}, handleInputChange, reset] = useForm({
        description: toDo.desc,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim().length<=1) {
            return;
        }
        const newToDo = {
            id: toDo.id,
            desc: description,
            done: toDo.done,
        };
        
        handleEditTodo(newToDo);
        handleFormulario();
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit} key={toDo.id} focused="true" className="tarea-form">
                <TextField 
                id="filled-basic" label="Editar Tarea" variant="filled" 
                    autoComplete="off"
                    name="description"
                    onChange={handleInputChange}
                    placeholder="Editar..."
                    type="text"
                    value={description}
                />
                <IconButton variant="contained" size="small" onClick={() => handleFormulario()}>
                    <i className="far fa-check-square"></i>
                </IconButton>
            </form>
        </>
    )
}