export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'edit':
            return state.map( todo => 
                (todo.id === action.payload.id) 
                    ? {...todo,desc:action.payload.desc}
                    : todo
            );
        case 'toggle-old':
            return state.map( todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                } else {
                    return todo;
                };
            });
        case 'toggle':
            return state.map(todo => 
                (todo.id === action.payload)
                    ? {...todo, done: !todo.done}
                    : todo
            );
        default:
            return state;
    }
    
};