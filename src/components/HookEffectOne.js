import React,{useState, useEffect} from 'react'

function HookEffectOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        if(count===0) document.title =`Click to see changes`
        else document.title = `Clicked ${count} times`
        console.log(`Updating document title: ${document.title}`);
    },[count])

    return (
        <div>
            <input type="text" value={name} onChange={event => setName(event.target.value)}/>
            <button onClick={() => setCount(prevCount => prevCount+1)}>Clicked {count} times</button>
        </div>
    )
}


export default HookEffectOne
