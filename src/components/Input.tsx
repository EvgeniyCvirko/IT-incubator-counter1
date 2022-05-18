import React, {ChangeEvent, useState} from 'react';
import  "../App.css";

type InputPropsType={
    name: string
    value: number
    callBack: (value: string)=>void
}

export const Input = (props: InputPropsType) => {

            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                props.callBack(e.currentTarget.value)
            }
    return  (
        <div className="input"> {props.name}
            <input value={props.value} type="number" onChange={onChangeHandler}/>
        </div>
    )

}
