import styled from 'styled-components';

export const TipContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 3rem;

    .tipContainer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

export const Button = styled.button<any>`
    width: calc(50% - 1rem);
    height: 4.6rem;
    margin-top: 1.8rem;

    border: none;
    border-radius: var(--border-radius);

    font-size: 2.6rem;
    color: var(--white);
    background-color: ${({ isSelected }) => isSelected ? 'var(--cyan-strong)' : 'var(--cyan-dark)'};

    &:hover {
        cursor: pointer;
        background-color: var(--cyan-strong);
    }
`

export const InputTip = styled.input<any>`
    width: calc(50% - 1rem);
    height: 4.6rem;
    margin-top: 1.8rem;

    border: none;
    border-radius: var(--border-radius);

    font-size: 2rem;
    color: var(--cyan-dark);
    background-color: var(--cyan-grayish-very-light);
    text-align: right;

    outline: none;
    padding: 1rem;

    :focus {
        border: 2px solid var(--cyan-strong);
    }
`