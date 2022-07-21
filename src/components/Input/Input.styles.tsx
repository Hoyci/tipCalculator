import styled from 'styled-components';

export const InputContainer = styled.div`
    margin-bottom: 3.6rem;
`

export const InputText = styled.input`
    position: relative;

    text-align: right;
    border: none;
    outline: none;

    background-color: var(--cyan-grayish-very-light);
    color: var(--cyan-dark);
    font-size: 2.5rem;
    border-radius: var(--border-radius);

    margin-top: 1rem;
    padding: .2rem 1.2rem;
    width: 100%;

    :focus {
        border: 2px solid var(--cyan-strong);
    }

    .inputError {
        border: 2px solid var(--error);
    }
`

export const Icon = styled.img`
    position: absolute;
    left: 4.5rem;
    top: 22rem;
`