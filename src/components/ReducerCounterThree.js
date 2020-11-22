import React,{useReducer} from 'react'

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

function ReducerCounterThree() {

    const [countOne, dispatchOne] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
            <p>CounterOne:{countOne}</p>
            <button onClick={() => dispatchOne('reset')}>Reset</button>
            <button onClick={() => dispatchOne('increment')}>Increment</button>
            <button onClick={() => dispatchOne('decrement')}>Decrement</button>
            </div>
            <div>
            <p>CounterTwo:{countTwo}</p>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            </div>
        </div> 
    )
}

export default ReducerCounterThree
