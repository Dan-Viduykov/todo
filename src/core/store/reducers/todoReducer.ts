/* eslint-disable @typescript-eslint/default-param-last */
import { TodoActionsTypes, TodoState, TodoActions } from './../../types/index';

const defaultState: TodoState = {
    todos: [
        {
            id: 1,
            title: 'lorem lorem lorem',
            completed: false
        },
        {
            id: 2,
            title: 'lorem lorem lorem lorem lorem lorem',
            completed: false
        }
    ]
}

export const todoReducer = (state = defaultState, action: TodoActions): TodoState => {
    const { todos } = state
    const idx = todos.findIndex((todo) => todo.id === action.payload);

    switch (action.type) {
        case TodoActionsTypes.DELETE_TODO:
            return {...state, todos: [
                ...todos.slice(0, idx),
                ...todos.slice(idx! + 1)
            ]};
            
        case TodoActionsTypes.COMPLETED_TODO:
            return {
                ...state,
                todos: todos.map(todo => todo.id === action.payload ?
                    { ...todo, completed: !todo.completed } : todo
                ) 
            };

        default:
            return state
    }
}