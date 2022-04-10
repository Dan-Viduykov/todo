import { todoReducer } from "./todoReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    todoReducer: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>
