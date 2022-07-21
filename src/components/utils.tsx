import React from 'react';
import styled from 'styled-components';

export const LabelTitle = styled.label`
    font-size: 1.6rem;
    color: var(--cyan-dark-grayish);
`

export const resetButtons = () => {
    const allElements = Array.from(document.getElementsByClassName('selected'));
    if (allElements) {
        allElements.forEach((element) => element.classList.toggle('selected'));
    }
}

export const handleChangeTip = (
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>,
    setValues: React.Dispatch<React.SetStateAction<{ bill: number, tip: number, numberOfPeople: number }>>
) => {
    resetButtons();
    event.currentTarget.classList.toggle('selected');

    const value = Number(event.currentTarget?.value)
    setValues(prevState => ({
        ...prevState,
        tip: value
    }))
}
