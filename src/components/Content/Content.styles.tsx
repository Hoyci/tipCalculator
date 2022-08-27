import styled from 'styled-components';

export const ContentContainer = styled.main`
    height: 100%;

    background-color: var(--white);
    border-radius: 2rem 2rem;

    .contentPadding {
        padding: 3rem 3.3rem 3rem 3.3rem;
        @media (min-width: 1000px) {
            display: flex;
            flex-direction: row;   
            padding: 3rem 3.3rem 0rem 3.3rem;  
        }
    }

    margin-bottom: 50px;

`
const minWidth = styled.div`
    @media (min-width: 1000px) {
        width: 50%;
    }
`
export const LeftSide = styled(minWidth)``
export const RightSide = styled(minWidth)``