import React, {useState} from 'react';
import "./App.css";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/store";
import {DisableIncAC, DisableInputAC, DisableResetAC, DisableSetAC, ErrorAC, ErrorInputAC} from "./store/reducerError";
import {MaxValueAC, StartValueAC} from "./store/reducerValue";

export const AppRedux = () => {
    const startValue = useSelector<AppStoreType, number>(state => state.value.startValue)
    const maxValue = useSelector<AppStoreType, number>(state => state.value.maxValue)
    const error = useSelector<AppStoreType, boolean>(state => state.error.error)
    const errorInput = useSelector<AppStoreType, boolean>(state => state.error.errorInput)
    const disableInput = useSelector<AppStoreType, boolean>(state => state.error.disableInput)
    const disableSet = useSelector<AppStoreType, boolean>(state => state.error.disableSet)
    const disableReset = useSelector<AppStoreType, boolean>(state => state.error.disableReset)
    const disableInc = useSelector<AppStoreType, boolean>(state => state.error.disableInc)

    //let [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startValue')))// state for start ValueInput
    //let [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue')))// state for maxValueInput
    // let [error, setError] = useState<boolean>(false)// for error disable inc
    // let [errorInput, setErrorInput] = useState<boolean>(false)
    // let [disableInput, setDisableInput] = useState<boolean>(false)
     let [number, setNumber] = useState<number>(Number(localStorage.getItem('startValue')))// state for number of counter
    // let [disableSet, setDisableSet] = useState<boolean>(true)// for error disable inc
    // let [disableReset, setDisableReset] = useState<boolean>(false)// for error disable inc
    // let [disableInc, setDisableInc] = useState<boolean>(false)// for error disable inc
    const dispatch = useDispatch()

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
            dispatch(DisableIncAC(true))
            dispatch(DisableInputAC(true))
            redNumber = "redValue";
        }
    }

    const errorDisable = (sv: number, mv: number) => {
        if (sv < 0 || (mv === sv) || (mv < sv)) {
            dispatch(DisableResetAC(true))
            dispatch(DisableIncAC(true))
            dispatch(DisableSetAC(true))
            dispatch(ErrorInputAC(true))
        } else {
            dispatch(DisableResetAC(true))
            dispatch(DisableIncAC(true))
            dispatch(DisableSetAC(false))
            dispatch(ErrorAC(true))
            dispatch(ErrorInputAC(false))
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
        dispatch(DisableIncAC(false))
        dispatch(DisableInputAC(false))
    }
    const changeMaxValue = (value: string) => {
        dispatch(MaxValueAC(JSON.parse(value)))
        errorDisable(startValue, JSON.parse(value))
        redNumber = "redValue";

    }
    const changeStartValue = (value: string) => {
        dispatch(StartValueAC(JSON.parse(value)))
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
        dispatch(ErrorAC(false))
        dispatch(DisableResetAC(false))
        dispatch(DisableIncAC(false))
        dispatch(DisableSetAC(true))

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
