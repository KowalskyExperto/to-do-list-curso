import { ToDoListItem } from './ToDoListItem'

export const ToDoList = ({todos, handleDelete, handleToggle, handleEditTodo}) => {
    return (
        <>
            <ul className="list-group list-group-flush">
            {
                todos.map(
                    (todo,i) => (
                        <ToDoListItem
                            todo={todo}
                            index={i}
                            key={i}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                            handleEditTodo={handleEditTodo}
                        />
                    )
                )
            }
            </ul>  
        </>
    )
}
