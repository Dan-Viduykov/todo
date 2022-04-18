import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filteredTodo } from "../../core/store/actions/todoActions";
import './InputSearch.scss'

const InputSearch: FC = () => {
    const [ value, setValue ] = useState('');
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(filteredTodo(value.trim()));
    }, [value])

    return (
        <input
            className="input input--search"
            type="text"
            placeholder="Search"
            value={value}
            onInput={(event: ChangeEvent<HTMLInputElement>) =>setValue(event.target.value)} />
    )
}

export default InputSearch