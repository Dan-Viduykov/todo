/* eslint-disable @typescript-eslint/default-param-last */
import { TodoActionsTypes, TodoState, TodoActions } from './../../types/index';

const defaultState: TodoState = {
    todo: []
}

export const todoReducer = (state = defaultState, action: TodoActions): TodoState => {
    switch (action.type) {
        case TodoActionsTypes.ADD_TODO:

        default:
            return state
    }
}