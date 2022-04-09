import React, { FC } from "react";
import './Header.scss'

const Header: FC = () => {

    const completed = 4;
    const todoCount = 7;

    return (
        <header className="header">
            <h1 className="header__title">todo list</h1>
            <div className="header__details">
                completed: <span>{completed} / {todoCount}</span>    
            </div>
        </header>
    )
}

export default Header