import React, {useState} from 'react';
import  "../App.css";

type ButtonPropsType={
    name: string
    callBack: ()=>void
    disable?: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onclickHandler = () =>{
        props.callBack()
    }
    return  <button onClick={onclickHandler} disabled={props.disable}>{props.name}</button>
}
