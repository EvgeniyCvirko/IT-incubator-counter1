import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter'
import {v1} from "uuid";

export const App = () => {
    return (
        <div>
            < Counter/>
        </div>
    )
}