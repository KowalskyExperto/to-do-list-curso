import { useForm } from '../hooks/useForm';

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
            <form onSubmit={handleSubmit} key={toDo.id}>
                <input
                    autoComplete="off"
                    name="description"
                    onChange={handleInputChange}
                    placeholder="Editar..."
                    type="text"
                    value={description}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary ms-2"
                >
                    Editar
                </button>
            </form>
        </>
    )
}