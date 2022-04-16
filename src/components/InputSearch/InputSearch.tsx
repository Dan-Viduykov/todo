import React, { FC, useState } from "react";
import './InputSearch.scss'

const InputSearch: FC = () => {
    const [ value, setValue ] = useState('');

    return (
        <input
            className="input input--search"
            type="text"
            placeholder="Search"
            value={value}
            onChange={(event) => setValue(event.target.value)} />
    )
}

export default InputSearch