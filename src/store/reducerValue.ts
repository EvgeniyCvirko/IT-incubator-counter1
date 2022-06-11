
const initialState ={
    startValue : 0,
    maxValue : 0,
    number : 0,
}
type initialStateType = typeof initialState


export const reducerValue = (state:initialStateType=initialState, action:ActionValueType ): initialStateType => {
switch (action.type) {
    case "START-VALUE":
        return state
}
    return state
}
type ActionValueType = ReturnType< typeof startValueAC >

    const startValueAC = () => ({type:'START-VALUE'} as const)