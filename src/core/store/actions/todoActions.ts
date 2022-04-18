import { TodoActionsTypes } from './../../types/index';

export const addTodo = (title: string) => {
    return {
        type: TodoActionsTypes.ADD_TODO,
        payload: title
    }
}

export const deleteTodo = (id: number) => {
    return {
        type: TodoActionsTypes.DELETE_TODO,
        payload: id
    }
}

export const completedTodo = (id: number) => {
    return {
        type: TodoActionsTypes.COMPLETED_TODO,
        payload: id
    }
}

export const filteredTodo = (filterChars: string) => {
    return {
        type: TodoActionsTypes.FILTERED_TODO,
        payload: filterChars
    }
}