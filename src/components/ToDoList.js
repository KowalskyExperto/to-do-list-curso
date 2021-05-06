import { ToDoListItem } from './ToDoListItem'
import { Grid } from '@material-ui/core';

export const ToDoList = ({todos, handleDelete, handleToggle, handleEditTodo}) => {
    return (
        <>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
            >
            {
                todos.map(
                    (todo,i) => (
                        <Grid item key={i} children={
                            <ToDoListItem
                                todo={todo}
                                index={i}
                                key={i}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                                handleEditTodo={handleEditTodo}
                            />
                        }/>
                    )
                )
            }
            </Grid>  
        </>
    )
}
