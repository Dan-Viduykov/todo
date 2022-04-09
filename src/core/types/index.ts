export enum TodoActionsTypes {
    ADD_TODO = 'ADD_TODO',
}

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TodoState {
    todo: ITodo[]
}

interface AddTodoAction {
    type: TodoActionsTypes.ADD_TODO,
    payload?: ITodo
}

export type TodoActions = AddTodoAction