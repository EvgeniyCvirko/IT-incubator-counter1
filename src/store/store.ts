import {combineReducers, legacy_createStore as createStore} from "redux";
import {reducerValue} from "./reducerValue";


const rootReducer = combineReducers({
    value: reducerValue,
})

export const store = createStore(rootReducer)

export type AppStore = ReturnType<typeof rootReducer>