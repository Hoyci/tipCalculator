import React, { forwardRef, useState } from "react";

import { LabelTitle } from "../utils";
import { InputContainer, InputClear, InputHeader } from "./Input.styles";
import { InputTypes } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputTypes>(({name, label, dispatcher, isZero, icon}, ref) => {
    let handleDispatcher
    if (name === 'bill') {
        handleDispatcher = (event:  React.KeyboardEvent<HTMLInputElement>) => {
            const value = Number(event.currentTarget.value);
            dispatcher(prevState => ({...prevState, bill: value}))
        }
    }
    if (name === 'numberOfPeople') {
        handleDispatcher = (event: React.KeyboardEvent<HTMLInputElement>) => {
            const value = Number(event.currentTarget.value);
            dispatcher(prevState => ({...prevState, numberOfPeople: value}))
        }
    }

    return (
        <div>
            {isZero && 
                <InputHeader>
                    <LabelTitle htmlFor={name}>{label}</LabelTitle>
                    <p>Can't be zero</p>
                </InputHeader>
            }
            {!isZero && <LabelTitle htmlFor={name}>{label}</LabelTitle>}
            <InputContainer isZero={isZero}>
                <img src={icon} alt="Icon"/>
                <InputClear ref={ref} type="text" placeholder="0" onChange={handleDispatcher} />
            </InputContainer>
        </div>
    )
})

export default Input;