

let initialState ={
    startValue :0 ,
    maxValue : 5,
    number : 0 ,
}
export type initialStateRVType = typeof initialState

export const reducerValue = (state:initialStateRVType=initialState, action:ActionValueType ): initialStateRVType => {

switch (action.type) {
    case "START-VALUE":
        return {...state, startValue: action.startValue}
    case "MAX-VALUE":
        return {...state, maxValue: action.maxValue}
    case "NUMBER":
        return {...state, number: action.number}
}
    return state
}
type ActionValueType = ReturnType< typeof StartValueAC > | ReturnType< typeof MaxValueAC > | ReturnType< typeof NumberAC >


 export const StartValueAC = (startValue: number) => ({type:'START-VALUE', startValue} as const)
 export const MaxValueAC = (maxValue:number) => ({type:'MAX-VALUE', maxValue} as const)
 export const NumberAC = (number:number) => ({type:'NUMBER', number} as const)