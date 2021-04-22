import { ToDoListItem } from './ToDoListItem'

export const ToDoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <>
            <ul className="list-group list-group-flush">
            {
                todos.map(
                    (todo,i) => (
                        <ToDoListItem
                            todo={todo}
                            index={i}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    )
                )
            }
            </ul>  
        </>
    )
}
