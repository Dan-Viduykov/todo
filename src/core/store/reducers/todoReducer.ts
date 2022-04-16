/* eslint-disable @typescript-eslint/default-param-last */
import { TodoActionsTypes, TodoState, TodoActions } from './../../types/index';

const defaultState: TodoState = {
    todos: [
        {
            id: 1,
            title: 'drink coffee',
            completed: false
        },
        {
            id: 2,
            title: 'build react redux ts app',
            completed: false
        },
        {
            id: 3,
            title: 'out for running',
            completed: false
        }
    ],
    filteredChars: '' 
}

const addTodo = (title: string = '') => {
    return {
        id: new Date().getTime(),
        title: title,
        completed: false
    }
}

export const todoReducer = (state = defaultState, action: TodoActions): TodoState => {
    const { todos } = state;
    const payload = action.payload;
    const idx = todos.findIndex((todo) => todo.id === payload);

    switch (action.type) {
        case TodoActionsTypes.ADD_TODO:
            const title = payload == '' ? 'new todo' : payload?.toString();
            const addedTodos = [ addTodo(title), ...todos ];

            return {
                ...state,
                todos: addedTodos
            }

        case TodoActionsTypes.DELETE_TODO:
            const deletedTodos = [
                ...todos.slice(0, idx),
                ...todos.slice(idx! + 1)
            ]

            return {
                ...state,
                todos: deletedTodos
            };
            
        case TodoActionsTypes.COMPLETED_TODO:
            const completedTodos = todos.map((todo) => {
                return todo.id === payload ? { ...todo, completed: !todo.completed } : todo
            }) 

            return {
                ...state,
                todos: completedTodos
            };

        default:
            return state
    }
}