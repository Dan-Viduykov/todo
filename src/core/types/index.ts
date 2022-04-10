export enum TodoActionsTypes {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    COMPLETED_TODO = 'COMPLETED_TODO',
}

export interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

export interface TodoState {
    todos: ITodo[]
}

interface AddTodoAction {
    type: TodoActionsTypes.ADD_TODO,
    payload?: string
}

interface DeleteTodoAction {
    type: TodoActionsTypes.DELETE_TODO,
    payload?: number
}

interface CompletedTodoAction {
    type: TodoActionsTypes.COMPLETED_TODO,
    payload?: number
}

export type TodoActions = AddTodoAction | DeleteTodoAction | CompletedTodoAction