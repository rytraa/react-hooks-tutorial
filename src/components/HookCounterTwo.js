import React,{useState} from 'react'

function HookCounterTwo() {

    const [name, setName] = useState({firstName:"", lastName:""});

    return (
        <div>
            <h2>Your name is {name.firstName} {name.lastName}</h2>
            <input type="text" placeholder="First Name"  value={name.firstName} onChange={(event)=>setName({...name, firstName:event.target.value})}/>
            <input type="text" placeholder="Last Name"   value={name.lastName}  onChange={(event)=>setName({...name, lastName:event.target.value})}/>
        </div>
    )
}

export default HookCounterTwo
