import {useState} from 'react';
import {ToDoEdit} from './ToDoEdit';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {Checkbox ,IconButton} from '@material-ui/core';


export const ToDoListItem = ({todo, index, handleDelete, handleToggle, handleEditTodo}) => {
    const [formulario, setFormulario] = useState(false)
    
    const handleFormulario = () => {
        setFormulario(!formulario)
    }
    const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {
            
        },
      })((props) => <Checkbox color="default" {...props} />);

    const colocarFormulario = () => {
        if(formulario) {
            return (
                <>
                    <ToDoEdit handleEditTodo={handleEditTodo} toDo={todo} handleFormulario={handleFormulario}/>
                </>
            )
        }else {
            return (
                <>
                    <p>
                    {todo.desc}
                    </p>
                    <IconButton key={index}  variant="contained" size="small" onClick={() => handleFormulario()}
                    >
                        <i className="far fa-edit"></i>
                    </IconButton>
                </>
            )
        }
        
    }

    return (
        <>
            <div key={todo.index}
                        className='todo'
                        
            >
                <GreenCheckbox/>
                {colocarFormulario()}
                <IconButton variant="contained" size="small" onClick={() => handleDelete(todo.id)} key={todo.index}>
                    <i className="fas fa-trash"></i>
                </IconButton>
            </div>
        </>
    )
}
