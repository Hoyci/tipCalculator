import React, { forwardRef } from 'react';
import DollarIcon from '../../assets/icon-dollar.svg';
import PersonIcon from '../../assets/icon-person.svg';
import { LabelTitle } from '../utils';

import { Icon, InputContainer, InputText } from './Input.styles';
import { InputTypes } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputTypes>(({name, label, dispatcher}, ref) => {
    let handleDispatcher

    if (name === 'bill') {
        handleDispatcher = (event: React.KeyboardEvent<HTMLInputElement>) => {
            const value = Number(event.currentTarget.value)
            dispatcher(prevState => ({...prevState, bill: value}));
        }
    }
    
    if (name === 'numberOfPeople') {
        handleDispatcher = (event: React.KeyboardEvent<HTMLInputElement>) => {
            const value = Number(event.currentTarget.value)
            dispatcher(prevState => ({...prevState, numberOfPeople: value}));
        }
    }


    return (
        <>
            <LabelTitle htmlFor={name}>{label}</LabelTitle>
            <InputContainer>
                {/* <Icon src={name === 'bill' ? DollarIcon : PersonIcon } alt='Input Icon' /> */}
                <InputText 
                    ref={ref} 
                    type="text" 
                    placeholder="0" 
                    onChange={handleDispatcher}
                />
                {/* Corrigir a posição do icone dentro do input */}
            </InputContainer>
        </>
    )
});

export default Input;