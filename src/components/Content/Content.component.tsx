import React, { useEffect, useRef } from 'react';

import { ContentContainer } from "./Content.styles";
import TipContainer from '../Tip'
import { handleChangeTip, LabelTitle, resetButtons } from '../utils';

import { useState } from 'react';
import BoxResult from '../BoxResult';
import InputIcon from '../Input';
import DollarIcon from '../../assets/icon-dollar.svg';
import PersonIcon from '../../assets/icon-person.svg'; 

function Content() {
    const [values, setValues] = useState({
        bill: 0,
        tip: 0,
        numberOfPeople: 0,
    })

    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [isZero, setIsZero] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);

    const billRef = useRef<HTMLInputElement>(null);
    const tipButtonRef = useRef<HTMLButtonElement>(null);
    const tipInputRef = useRef<HTMLInputElement>(null);
    const numberOfPeopleRef = useRef<HTMLInputElement>(null);

    const handleButtonTip = (event: React.MouseEvent<HTMLButtonElement>) => {
        handleChangeTip(event, setValues);
        if (tipInputRef.current) {
            tipInputRef.current.value = ''
        }
    }

    const handleInputTip = (event: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent<HTMLButtonElement>) => {
        handleChangeTip(event, setValues);
    }

    const handleResetValues = () => {
        setValues({
            bill: 0,
            tip: 0,
            numberOfPeople: 0
        })

        resetButtons();

        if (billRef.current) {
            billRef.current.value = '';
        }

        if (tipInputRef.current) {
            tipInputRef.current.value = ''
        }

        if (numberOfPeopleRef.current) {
            numberOfPeopleRef.current.value = '';
        }
    }

    useEffect(() => {
        const numberOfPeopleValue = Number(numberOfPeopleRef.current?.value);
        console.log(numberOfPeopleValue);

        if (numberOfPeopleValue !== 0 && numberOfPeopleRef.current) {
            setIsZero(false);
            setIsDisabled(false);
        } else {
            setTipAmount(0);
            setTotal(0);
            setIsZero(true);
            setIsDisabled(true);
            return;
        }

        const tipValue = (values.bill * (values.tip / 100)) / values.numberOfPeople 
        console.log(tipValue)
        setTipAmount(Math.round(tipValue * 100) / 100)

        const totalValue = (values.bill  /  values.numberOfPeople )  + tipValue
        console.log(totalValue)
        setTotal(Math.round(totalValue * 100) / 100)

        console.log(values);
    }, [values])

    return (
        <ContentContainer>
            <div className='contentPadding'>
                <InputIcon icon={DollarIcon} ref={billRef} name='bill' label='Bill' dispatcher={setValues}/>
                <TipContainer>
                    <LabelTitle>Select Tip %</LabelTitle>
                    <div className="tipContainer">
                        <button ref={tipButtonRef} onClick={handleButtonTip} value={5}>5%</button>
                        <button ref={tipButtonRef} onClick={handleButtonTip} value={10}>10%</button>
                        <button ref={tipButtonRef} onClick={handleButtonTip} value={15}>15%</button>
                        <button ref={tipButtonRef} onClick={handleButtonTip} value={25}>25%</button>
                        <button ref={tipButtonRef} onClick={handleButtonTip} value={50}>50%</button>
                        <input ref={tipInputRef} type="text" placeholder="CUSTOM" maxLength={3} onClick={handleInputTip} onChange={handleInputTip} />
                    </div>
                </TipContainer>
                <InputIcon icon={PersonIcon} ref={numberOfPeopleRef} name='numberOfPeople' label='Number of People' dispatcher={setValues} isZero={isZero}/>
                <BoxResult tipAmount={tipAmount} total={total} resetValues={handleResetValues} isDisabled={isDisabled}/>
            </div>
        </ContentContainer>
    );
}

export default Content
