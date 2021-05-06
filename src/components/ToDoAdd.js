import { useForm } from '../hooks/useForm';
import {Button, TextField} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

export const ToDoAdd = ({handleAddTodo}) => {
    const [{description}, handleInputChange, reset] = useForm({
        description: '',
    });

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(2),
        },

    }));
    
    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });
    
    const classes = useStyles();

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
            <form onSubmit={handleSubmit} key='1' className="todo-form">
                <ThemeProvider theme={theme}>
                    <TextField
                        className={classes.margin}
                        id="filled-basic"
                        autoComplete="off"
                        name="description"
                        variant="outlined"
                        onChange={handleInputChange}
                        label="Tarea nueva"
                        type="text"
                        value={description}
                    />
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        endIcon={<Icon className="fa fa-plus-circle"/>}
                        className={classes.margin}
                    >
                        Agregar
                    </Button>

                </ThemeProvider>
            </form>
        </>
    )
}
