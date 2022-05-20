import React, {useState} from 'react';
import "./App.css";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

export const App = () => {
    let [startValue, setStartValue] = useState<number>(0)// state for start ValueInput
    let [maxValue, setMaxValue] = useState<number>(5)// state for maxValueInput
    let [error, setError] = useState<boolean>(false)// for error disable inc
    let [errorInput, setErrorInput] = useState<boolean>(false)
    let [disableInput, setDisableInput] = useState<boolean>(false)
    let [number, setNumber] = useState<number>(0)// state for number of counter
    let [disableSet, setDisableSet] = useState<boolean>(true)// for error disable inc
    let [disableReset, setDisableReset] = useState<boolean>(false)// for error disable inc
    let [disableInc, setDisableInc] = useState<boolean>(false)// for error disable inc

    let redNumber = "value"
    let errorMessage = "enter values and press 'set'"
    if (startValue < 0 || (startValue === maxValue) || (maxValue < startValue) ) {
        errorMessage = "Incorrect value!";
        redNumber = "redValue"
    }

    if (number === maxValue) {
        redNumber = "redValue";
    }

    const disableBtnInc = () => {
        if (number === (maxValue - 1)) {
            setDisableInc(true)
            setDisableInput(true)
            redNumber = "redValue";
        }
    }

    const errorDisable = (sv: number, mv: number) => {
        if (sv < 0 || (mv === sv) || (mv < sv)) {
            setDisableReset(true)
            setDisableInc(true)
            setDisableSet(true)
            setErrorInput(true)
        } else {
            setDisableReset(true)
            setDisableInc(true)
            setDisableSet(false)
            setError(true)
            setErrorInput(false)
        }
    }

    const incNumber = () => {

        if (number < maxValue) {
            setNumber(number + 1)
        }
        disableBtnInc()

    }
    const restNumber = () => {
        setNumber(Number(localStorage.getItem('startValue')))
        setDisableInc(false)
        setDisableInput(false)
    }
    const changeMaxValue = (value: string) => {
        setMaxValue(JSON.parse(value))
        errorDisable(startValue, JSON.parse(value))
        redNumber = "redValue";

    }
    const changeStartValue = (value: string) => {
        setStartValue(JSON.parse(value))
        errorDisable(JSON.parse(value), maxValue)
    }
    const setHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        let startValueAsNumber = localStorage.getItem('startValue')
        let maxValueAsNumber = localStorage.getItem('maxValue')
        if (startValueAsNumber && maxValueAsNumber) {
            setNumber(JSON.parse(startValueAsNumber))
        }
        setError(false)
        setDisableReset(false)
        setDisableInc(false)
        setDisableSet(true)

    }

    return (<>
        <div className="app">
            <div className="block">
                <div className="value">
                    <Input name='Max value:'
                           value={maxValue}
                           callBack={changeMaxValue}
                           error={errorInput}
                           disable={disableInput}/>
                    <Input name='Star value:'
                           value={startValue}
                           callBack={changeStartValue}
                           error={errorInput}
                           disable={disableInput}/>
                </div>
                <div className="button">
                    <Button
                        callBack={setHandler}
                        name='set'
                        disable={disableSet}/>
                </div>
            </div>
            <div className="block">
                <div className={redNumber}>{error ? errorMessage : number}</div>
                <div>
                    <Button callBack={incNumber}
                            name='inc'
                            disable={disableInc}/>
                    <Button callBack={restNumber}
                            name='reset'
                            disable={disableReset}/>
                </div>
            </div>
        </div>
    </>)
}
