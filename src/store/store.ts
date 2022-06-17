import {combineReducers, legacy_createStore as createStore} from "redux";
import {reducerValue} from "./reducerValue";
import {reducerError} from "./reducerError";


const rootReducer = combineReducers({
    value: reducerValue,
    error: reducerError
})

let persistedState
const persistedStateString  = localStorage.getItem('values')

// const persistedStateStringMV  = localStorage.getItem('maxValue')

if (persistedStateString){
    persistedState = JSON.parse(persistedStateString)
    console.log(JSON.parse(persistedStateString))
}
export const store = createStore(rootReducer,{
    value:persistedState,
} )


 /*store.subscribe(() => {
     // localStorage.setItem('startValue', JSON.stringify(store.getState().value.startValue))
     localStorage.setItem('values', JSON.stringify(store.getState().value))
     // localStorage.setItem('maxValue', JSON.stringify(store.getState().value.maxValue))
 })*/
export type AppStoreType = ReturnType<typeof rootReducer>
