const initialState = {
    error: false,
    errorInput: false,
    disableInput: false,
    disableSet: false,
    disableReset: false,
    disableInc: false,
}
export type initialStateREType = typeof initialState


export const reducerError = (state: initialStateREType = initialState, action: ActionValueType): initialStateREType => {
    switch (action.type) {
        case "ERROR":
            return {...state, error: action.error }
        case "ERROR-INPUT":
            return {...state, errorInput: action.error }
        case "DISABLE-INPUT":
            return {...state, disableInput: action.error }
        case "DISABLE-SET":
            return {...state, disableSet: action.error }
        case "DISABLE-RESET":
            return {...state, disableReset: action.error }
        case "DISABLE-INC":
            return {...state, disableInc: action.error }
    }
    return state
}

type ActionValueType = ReturnType<typeof ErrorAC>
                     | ReturnType<typeof ErrorInputAC>
                     | ReturnType<typeof DisableInputAC>
                     | ReturnType<typeof DisableSetAC>
                     | ReturnType<typeof DisableResetAC>
                     | ReturnType<typeof DisableIncAC>

export const ErrorAC = (error: boolean) => ({type: "ERROR", error} as const)
export const ErrorInputAC = (error: boolean) => ({type: "ERROR-INPUT", error} as const)
export const DisableInputAC = (error: boolean) => ({type: "DISABLE-INPUT", error} as const)
export const DisableSetAC = (error: boolean) => ({type: "DISABLE-SET", error} as const)
export const DisableResetAC = (error: boolean) => ({type: "DISABLE-RESET", error} as const)
export const DisableIncAC = (error: boolean) => ({type: "DISABLE-INC", error} as const)