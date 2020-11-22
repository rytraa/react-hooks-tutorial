import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);
    // useState(initialState)

    return (
        <div>
            <p>Count: {count}</p>

            {/* without prevState */}
            <button onClick={ () => {setCount(0)} }> Reset </button>
            <button onClick={ () => {setCount(count + 1)} }> Count ++ </button>

            {/* using prevState i.e.prevCount */}
            <button onClick={() => setCount(prevCount => prevCount + 5)}> Count += 5</button>
        </div>
    )
}

export default HookCounter;
