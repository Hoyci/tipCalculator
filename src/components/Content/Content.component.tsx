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
    const [bill, setBill] = useState('');
    const [tip, setTip] = useState('');
    const [customTip, setCustomTip] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');

    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [buttonSelected, setButtonSelected] = useState(0);

    const buttonDisabled = !bill && !tip && !numberOfPeople

    const handleResetValues = () => {
        setBill('');
        setTip('');
        setCustomTip('');
        setNumberOfPeople('');
        setButtonSelected(0);
    }

    const handleButton = (value: number) => {
        setButtonSelected(value);
        setTip(String(value));
        setCustomTip('');
    }

    const handleInputTip = (value: string) => {
        setButtonSelected(0);
        setCustomTip(value);
    }

    useEffect(() => {
        console.log(bill)
        if (numberOfPeople === '') {
            setTotal(0);
            setTipAmount(0);
            return ;
        }

        const billParsed = parseFloat(bill.replace(',', '.').replace(' ', ''))
        const tipParsed = parseFloat(tip.replace(',', '.').replace(' ', '')) || parseFloat(customTip.replace(',', '.').replace(' ', ''));
        const numberOfPeopleParsed = parseFloat(numberOfPeople.replace(',', '.').replace(' ', ''));

        const tipValue = (billParsed * (tipParsed / 100)) / numberOfPeopleParsed;
        const totalValue = (billParsed / numberOfPeopleParsed) + tipValue;
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
                        <InputTip value={customTip} type="text" placeholder="CUSTOM" onChange={(event: React.KeyboardEvent<HTMLInputElement>) => handleInputTip(event.target.value)} />
                    </div>
                </TipContainer>
                <InputIcon  showZeroLabel value={numberOfPeople} icon={PersonIcon} name='numberOfPeople' label='Number of People' handleChange={setNumberOfPeople}/>
                <BoxResult tipAmount={tipAmount} total={total} resetValues={handleResetValues} isDisabled={buttonDisabled}/>
            </div>
        </ContentContainer>
    );
}

export default Content
