import React, { FC } from "react";
import './InputSearch.scss'

const InputSearch: FC = () => {
    return (
        <input className="input input--search" type="text" placeholder="Search" />
    )
}

export default InputSearch