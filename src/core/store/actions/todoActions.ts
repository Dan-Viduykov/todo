import { ITodo, TodoActionsTypes } from './../../types/index';

export const addTodo = (todo: ITodo) => {
    return {
        type: TodoActionsTypes.ADD_TODO,
        payload: todo
    }
}