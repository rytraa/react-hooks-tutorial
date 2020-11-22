import React,{useEffect} from 'react'
import ContextParent from './ContextParent'

function ContextGrandParent() {
    useEffect(() => {
        console.log("ContextGrandParent monuted.")
    }, [])
    return (
        <div>
            <ContextParent/>
        </div>
    )
}

export default ContextGrandParent
