export enum TodoActionsTypes {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    COMPLETED_TODO = 'COMPLETED_TODO',
    FILTERED_TODO = 'FILTERED_TODO',
}

export interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

export interface TodoState {
    todos: ITodo[];
    filteredChars: string;
}

interface AddTodo {
    type: TodoActionsTypes.ADD_TODO,
    payload?: string
}

interface DeleteTodo {
    type: TodoActionsTypes.DELETE_TODO,
    payload: number
}

interface CompletedTodo {
    type: TodoActionsTypes.COMPLETED_TODO,
    payload: number
}

interface FilteredTodo {
    type: TodoActionsTypes.FILTERED_TODO,
    payload: string
}

export type TodoActions = AddTodo | DeleteTodo | CompletedTodo | FilteredTodo