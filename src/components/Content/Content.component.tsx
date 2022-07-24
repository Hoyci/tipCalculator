import React, { useEffect } from 'react';

import { ContentContainer } from "./Content.styles";
import TipContainer from '../Tip'
import { LabelTitle } from '../utils';

import { useState } from 'react';
import BoxResult from '../BoxResult';
import InputIcon from '../Input';
import DollarIcon from '../../assets/icon-dollar.svg';
import PersonIcon from '../../assets/icon-person.svg'; 
import { Button, InputTip } from '../Tip/Tip.styles';

import { TipValues } from '../utils';

function Content() {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [customTip, setCustomTip] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(0);

    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [buttonSelected, setButtonSelected] = useState(0);

    const buttonDisabled = !bill && !tip && !numberOfPeople
    console.log(buttonDisabled)

    const handleResetValues = () => {
        setBill(0);
        setTip(0);
        setCustomTip(0);
        setNumberOfPeople(0);
        setButtonSelected(0);
    }

    const handleButton = (value: number) => {
        setButtonSelected(value);
        setTip(value);
        setCustomTip(0);
    }

    const handleInputTip = (value: number) => {
        setButtonSelected(0);
        setCustomTip(value);
    }

    useEffect(() => {
        if (numberOfPeople === 0) {
            setTotal(0);
            setTipAmount(0);
            return ;
        }

        const tipToBeUsed = tip || customTip

        const tipValue = (bill * (tipToBeUsed / 100)) / numberOfPeople;
        const totalValue = (bill / numberOfPeople) + tipValue;
        setTipAmount(Math.round(tipValue * 100) / 100);
        setTotal(Math.round(totalValue * 100) / 100);

        console.log({bill, tip, numberOfPeople, customTip});
    }, [bill, tip, numberOfPeople, customTip])

    return (
        <ContentContainer>
            <div className='contentPadding'>
                <InputIcon icon={DollarIcon} value={bill} name='bill' label='Bill' handleChange={setBill}/>
                <TipContainer>
                    <LabelTitle>Select Tip %</LabelTitle>
                    <div className="tipContainer">
                        {TipValues.map((value) => {
                            return (
                                <Button key={value} onClick={() => handleButton(value)}  isSelected={buttonSelected === value}>{value}%</Button>
                            )
                        })}
                        <InputTip value={customTip} type="text" placeholder="CUSTOM" maxLength={3} onChange={(event: React.KeyboardEvent<HTMLInputElement>) => handleInputTip(+event.target.value)} />
                    </div>
                </TipContainer>
                <InputIcon  showZeroLabel value={numberOfPeople} icon={PersonIcon} name='numberOfPeople' label='Number of People' handleChange={setNumberOfPeople}/>
                <BoxResult tipAmount={tipAmount} total={total} resetValues={handleResetValues} isDisabled={buttonDisabled}/>
            </div>
        </ContentContainer>
    );
}

export default Content
