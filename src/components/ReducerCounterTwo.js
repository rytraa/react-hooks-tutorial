import React,{useReducer} from 'react'

const initialState = { firstCounter:0 }

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state 
    }
}

function ReducerCounterTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Count:{state.firstCounter}</p>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
            <button onClick={() => dispatch({value: 5, type:'increment'})}>Increment</button>
            <button onClick={() => dispatch({value: -5, type:'decrement'})}>Decrement</button>
        </div> 
    )
}

export default ReducerCounterTwo
