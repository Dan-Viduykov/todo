import React, { FC } from "react";
import { useTypedSelector } from "../../core/hooks/useTypedSelector";
import './Header.scss'

const Header: FC = () => {
    const todos = useTypedSelector((state) => state.todoReducer.todos)
    const completed = todos.filter((todo) => todo.completed);

    return (
        <header className="header">
            <h1 className="header__title">todo list</h1>
            <div className="header__details">
                completed: <span>{completed.length} / {todos.length}</span>    
            </div>
        </header>
    )
}

export default Header