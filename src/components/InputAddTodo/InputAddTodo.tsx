import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../core/store/actions/todoActions";
import './InputAddTodo.scss'

const InputAddTodo: FC = () => {
    const [ value, setValue ] = useState('')
    const dispatch = useDispatch()

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addTodo(value))
    }

    return (
        <form className="form" onSubmit={(event) => onSubmit(event)}>
            <input
                className="input"
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Add new Todo" />
        </form>
    )
}

export default InputAddTodo