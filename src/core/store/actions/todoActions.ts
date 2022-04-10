import { ITodo, TodoActionsTypes } from './../../types/index';

export const addTodo = (todo: ITodo) => {
    return {
        type: TodoActionsTypes.ADD_TODO,
        payload: todo
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