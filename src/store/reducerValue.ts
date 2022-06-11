
const initialState ={
    startValue : 0,
    maxValue : 5,
    number : 0,
}
type initialStateType = typeof initialState


export const reducerValue = (state:initialStateType=initialState, action:ActionValueType ): initialStateType => {
switch (action.type) {
    case "START-VALUE":
        return {...state, startValue: action.startValue}
    case "MAX-VALUE":
        return {...state, maxValue: action.maxValue}
}
    return state
}
type ActionValueType = ReturnType< typeof StartValueAC > | ReturnType< typeof MaxValueAC >


 export const StartValueAC = (startValue: number) => ({type:'START-VALUE', startValue} as const)
 export const MaxValueAC = (maxValue:number) => ({type:'MAX-VALUE', maxValue} as const)