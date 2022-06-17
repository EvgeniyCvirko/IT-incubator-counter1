import {combineReducers, legacy_createStore as createStore} from "redux";
import {reducerValue} from "./reducerValue";
import {reducerError} from "./reducerError";

const rootReducer = combineReducers({
    value: reducerValue,
    error: reducerError
})

let persistedState
const persistedStateString  = localStorage.getItem('values')

if (persistedStateString){
    persistedState = JSON.parse(persistedStateString)
    console.log(JSON.parse(persistedStateString))
}
export const store = createStore(rootReducer,{
    value:persistedState,
} )
export type AppStoreType = ReturnType<typeof rootReducer>
