import {combineReducers, legacy_createStore as createStore} from "redux";
import {reducerValue} from "./reducerValue";
import {reducerError} from "./reducerError";


const rootReducer = combineReducers({
    value: reducerValue,
    error: reducerError
})

export const store = createStore(rootReducer)

export type AppStoreType = ReturnType<typeof rootReducer>