import React,{useContext} from 'react'
import { CountContext } from './ReducerContextParent'

function ReducerContextA() {

    const countContext = useContext(CountContext)

    return (
        <div>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default ReducerContextA
