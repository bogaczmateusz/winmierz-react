import React, { useState, useEffect } from 'react';

import { Step1, Step2 } from '../Steps';
import { Results } from '../Results';


export default function Form(props) {
    const [ startBlg, setStartBlg ] = useState('');
    const [ type, setType ] = useState('juice');
    const [ finalBlg, setFinalBlg ] = useState('');
    const [ partialJuice, setPartialJuice ] = useState('');
    const [ partialWater, setPartialWater ] = useState('');
    const [ amount, setAmount ] = useState('');

    const [ result, setResult ] = useState({});

    const handleSubmit = e => {
        const blg = finalBlg;

        if (typeof blg === 'number') {
            if (startBlg < 10) {
                const gramPerLiterStart = parseFloat(blg * 10);
                const gramPerLiter = +gramPerLiterStart.toFixed(0);
                const sugarTotal = +gramPerLiter * +amount;
                const alcoholAmount = +gramPerLiter / 16.9;
                const alcoholTotal = +alcoholAmount.toFixed(2);

                setResult({
                    gramPerLiter,
                    sugarTotal,
                    alcoholTotal
                });
            } else {
                const gramPerLiterStart = parseFloat(blg * 10);
                const water = 1000 - parseFloat(gramPerLiterStart);
                const sugar = gramPerLiterStart * 0.62;
                const amountDecimal = +water.toFixed(0) + +sugar.toFixed(0);
                const gramPerLiterDecimal = (gramPerLiterStart.toFixed(0) * 1000) / amountDecimal;
                const gramPerLiter = gramPerLiterDecimal.toFixed(0);

                const sugarTotal = +gramPerLiter * +amount;
                const alcoholAmount = +gramPerLiter / 16.9;
                const alcoholTotal = +alcoholAmount.toFixed(2);

                setResult({
                    gramPerLiter,
                    sugarTotal,
                    alcoholTotal
                });
            }
        }

        e.preventDefault();
    }

    const handleBlgChange = e => {
        const { value } = e.target;
        value !== '' ? setStartBlg(parseFloat(value)) : setStartBlg('');
    }

    const handleTypeChange = e => {
        const { value } = e.target;
        setType(value);
        setAmount('');
    }

    const handleAmountChange = e => {
        const { value, name } = e.target;

        if (type === 'juice') {
            setAmount(value);
        } else {
            name === 'juice-amount' && setPartialJuice(value);
            name === 'water-amount' && setPartialWater(value);
        }
    }

    useEffect(() => {
        if (partialJuice !== '' && partialWater !== '' && startBlg !== '') {
            const total = parseFloat(partialJuice) + parseFloat(partialWater);
            const mod = 4 * (parseFloat(partialJuice) / (parseFloat(partialJuice) + parseFloat(partialWater)));
            setFinalBlg(parseFloat(startBlg) - parseFloat(mod));
            setAmount(total);
        } else {
            setAmount('');
            setFinalBlg('');
        }
    }, [partialJuice, partialWater, startBlg]);

    useEffect(() => {
        if (type === 'juice') {
            startBlg !== '' && setFinalBlg(startBlg - 4);
        } else {
            setFinalBlg('');
        }
    }, [startBlg, type])

    return (
        <form className="calculator-form" onSubmit={handleSubmit}>
            <Step1 startBlg={startBlg} handleChange={handleBlgChange} />
            <Step2 type={type} handleTypeChange={handleTypeChange} handleAmountChange={handleAmountChange} />
            {/* {startBlg !== '' && <p>BLG: {startBlg}</p>}
            {finalBlg !== '' && <p>BLG (po modyfikatorze na niecukry): {finalBlg}</p>}
            {amount !== '' && <p>Nastaw: {amount}l</p>} */}

            {Object.keys(result).length > 0 && <Results result={result} />}
        </form>
    )
}
