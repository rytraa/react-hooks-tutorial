import React,{useState} from 'react'
import HookEffectTwo from './HookEffectTwo'


function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookEffectTwo/>}
        </div>
    )
}


export default MouseContainer
