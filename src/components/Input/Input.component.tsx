import React from "react";

import { LabelTitle } from "../utils";
import { InputContainer, InputClear, InputHeader } from "./Input.styles";
import { InputTypes } from './Input.types';

function Input({name, label, handleChange, icon, value, showZeroLabel}: InputTypes) {
    return (
        <div>
            <InputHeader>
                <LabelTitle htmlFor={name}>{label}</LabelTitle>
                {showZeroLabel && !value && <p>Can't be zero</p>}    
            </InputHeader>

            <InputContainer isZero={showZeroLabel && !Boolean(value)}>
                <img src={icon} alt="Icon"/>
                <InputClear value={value} type="text" placeholder="0" onChange={(event: React.KeyboardEvent<HTMLInputElement>) => handleChange(event.target.value)} />
            </InputContainer>
        </div>
    )
}

export default Input;