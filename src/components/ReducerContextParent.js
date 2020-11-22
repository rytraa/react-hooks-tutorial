import React,{useReducer} from 'react'
import ReducerContextA from './ReducerContextA'
import ReducerContextB from './ReducerContextB'

export const CountContext = React.createContext()

const initialState = 0

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state 
    }
}

function ReducerContextParent() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
            <div>
                <ReducerContextB/>
                <ReducerContextA/>
            </div>
        </CountContext.Provider>
    )
}

export default ReducerContextParent
