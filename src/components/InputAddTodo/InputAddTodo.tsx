import React, { FC } from "react";
import './InputAddTodo.scss'

const InputAddTodo: FC = () => {
    return (
        <input className="input" type="text" placeholder="Add new Todo" />
    )
}

export default InputAddTodo