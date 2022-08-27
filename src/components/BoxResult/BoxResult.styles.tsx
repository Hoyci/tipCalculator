import styled, { css } from 'styled-components';

export const Box = styled.div`
    width: 100%;
    height: 26rem;
    padding: 4.3rem 2.3rem;
    
    background-color: var(--cyan-dark);
    border-radius: 16px;

    @media (min-width: 1000px) {
        margin-left: 20px;
        height: calc(100% - 3rem);
    }
`

export const ContentButton = styled.button<any>`
    margin-top: 2rem;
    width: 100%;
    height: 5rem;

    background-color: ${({disabled}) => disabled ? 'var(--cyan-dark-grayish)' : 'var(--cyan-strong)'};

    outline: none;
    border: none;
    border-radius: 3px;

    font-size: 20px;

    color: var(--cyan-dark);

    ${({disabled}) => !disabled && css`     
        &:hover {
            background-color: var(--cyan-grayish-light);
            cursor: pointer;
        }
    `}

    @media (min-width: 1000px) {
        margin-top: 20rem;
    }
`

export const ContainerValues = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.8rem;

    div h3 {
        font-size: 16px;
        color: var(--white);
    }

    div p {
        font-size: 12px;
        color: var(--cyan-grayish);
    }

    h1 {
        font-size: 30px;
        color: var(--cyan-strong);
    }
`