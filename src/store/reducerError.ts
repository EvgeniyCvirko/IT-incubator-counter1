const initialState = {
    error: false,
    errorInput: false,
    disableInput: false,
    disableSet: true,
    disableReset: false,
    disableInc: false,
}
type initialStateType = typeof initialState


export const reducerError = (state: initialStateType = initialState, action: ActionValueType): initialStateType => {
    switch (action.type) {
        case "ERROR":
            return state
        case "ERROR-INPUT":
            return state
        case "DISABLE-INPUT":
            return state
        case "DISABLE-SET":
            return state
        case "DISABLE-RESET":
            return state
        case "DISABLE-INC":
            return state
    }
    return state
}

type ActionValueType = ReturnType<typeof ErrorAC>
                     | ReturnType<typeof ErrorInputAC>
                     | ReturnType<typeof DisableInputAC>
                     | ReturnType<typeof DisableSetAC>
                     | ReturnType<typeof DisableResetAC>
                     | ReturnType<typeof DisableIncAC>

const ErrorAC = (error: boolean) => ({type: "ERROR", error} as const)
const ErrorInputAC = (error: boolean) => ({type: "ERROR-INPUT", error} as const)
const DisableInputAC = (error: boolean) => ({type: "DISABLE-INPUT", error} as const)
const DisableSetAC = (error: boolean) => ({type: "DISABLE-SET", error} as const)
const DisableResetAC = (error: boolean) => ({type: "DISABLE-RESET", error} as const)
const DisableIncAC = (error: boolean) => ({type: "DISABLE-INC", error} as const)