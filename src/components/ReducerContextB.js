import React,{useContext} from 'react'
import { CountContext } from './ReducerContextParent'

function ReducerContextB() {

    const countContext = useContext(CountContext)

    return (
        <div>
            <p>Count:{countContext.countState}</p>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerContextB
