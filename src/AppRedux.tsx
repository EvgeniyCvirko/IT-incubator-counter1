import React from 'react';
import "./App.css";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/store";
import {
    DisableIncAC,
    DisableInputAC,
    DisableResetAC,
    DisableSetAC,
    ErrorAC,
    ErrorInputAC,
    initialStateREType
} from "./store/reducerError";
import {initialStateRVType, MaxValueAC, NumberAC, StartValueAC} from "./store/reducerValue";
export const AppRedux = () => {
    const state = useSelector<AppStoreType, initialStateRVType >(state=> state.value)
    console.log(state)
    const {startValue, maxValue,number} = useSelector<AppStoreType, initialStateRVType>(state => state.value)
    const {error,errorInput,disableInput,disableSet, disableReset,disableInc } = useSelector<AppStoreType, initialStateREType>(state => state.error)
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
            dispatch(NumberAC(number + 1))
        }
        disableBtnInc()

    }
    const restNumber = () => {
        dispatch(NumberAC(startValue))
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
        dispatch(NumberAC(JSON.parse(value)))
        errorDisable(JSON.parse(value), maxValue)
    }
    const setHandler = () => {
        localStorage.setItem('values', JSON.stringify(state))
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
                    <Input name='Start value:'
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
