import styled from 'styled-components';
import { InputComponentType } from './Input.types';

export const InputHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 12px;
        color: #D08375;
    }
`

export const InputClear = styled.input`
    border: none;
    outline: none;
    font-size: 2.5rem;

    color: var(--cyan-dark);

    background-color: transparent;
    text-align: right;
    width: 100%;
`

export const InputContainer = styled.div<InputComponentType>`
    width: 100%;
    padding: .4rem 1rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    
    border-radius: var(--border-radius);
    border: ${({isZero}) => isZero ? '2px solid #D08375' : ''};

    background-color: var(--cyan-grayish-very-light);

    display: flex;
    align-items: center;

    &:focus-within {
        border: 2px solid #41B4A5;
    }
`