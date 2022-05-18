import React, {useState} from 'react';
import "./App.css";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

export const App = () => {
    const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startValue')))
    const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue')))
    let [number, setNumber] = useState<number>(startValue)
    let [error, setError] = useState<boolean>(false)
    const disableFalse = false;
    let disableTrue = false;
    if (number === maxValue && number >= 1) {
        disableTrue = true;
    }
    /*if (number <= 0){
        setError(false)
    }*/



    const errorMessage = "incorrect value" ;  /*"enter values and press 'set'"*/
    const text = error ? errorMessage : number
    const redNumber = number === maxValue ? "redValue" : "value";
    const addNumber = () => {
        if (number < maxValue )
            setNumber(number + 1)
    }
    const restNumber = () => {
        setNumber(startValue)
    }
    const changeMaxValue = (value: string) =>{
        setMaxValue(JSON.parse(value))
    }
    const changeStartValue = (value: string) =>{
        setStartValue(JSON.parse(value))
    }
    const callBackHandler = () =>{
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    return (<>
        <div className="app">
            <div className="block">
                <div className="value">
                    <Input name='Max value:'
                           value={maxValue}
                           callBack={changeMaxValue}/>
                    <Input name='Star value:'
                           value={startValue}
                           callBack={changeStartValue}/>
                </div>
                <div className="button">
                    <Button
                        callBack={callBackHandler}
                        name='set'/>
                </div>
            </div>
            <div className="block">
                <div className={redNumber}>{text}</div>
                <div className="button">
                    <Button callBack={addNumber}
                            name='inc'
                            disable={disableTrue}/>
                    <Button callBack={restNumber}
                            name='reset'
                            disable={disableFalse}/>
                </div>
            </div>
        </div>
    </>)
}
