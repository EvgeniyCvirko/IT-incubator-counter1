import React, {ChangeEvent} from 'react';
import "../App.css";

type InputPropsType = {
    name: string
    value: number
    error: boolean
    disable: boolean
    callBack: (value: string) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.value)
    }
    return (
        <div className="input"> {props.name}
            <input value={props.value} disabled={props.disable} className={props.error ? 'inputError' : ""} type="number"
                   onChange={onChangeHandler}/>
        </div>
    )

}
