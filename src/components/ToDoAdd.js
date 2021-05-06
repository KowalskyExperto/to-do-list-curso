import { useForm } from '../hooks/useForm';

export const ToDoAdd = ({handleAddTodo}) => {
    const [{description}, handleInputChange, reset] = useForm({
        description: '',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length<=1) {
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar Tarea</h4>
            <hr/>
            <form onSubmit={handleSubmit} key='1'>
                <input
                    autoComplete="off"
                    name="description"
                    onChange={handleInputChange}
                    placeholder="Tarea nueva ..."
                    type="text"
                    value={description}
                />
                <button
                    type="submit"
                    className=""
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
