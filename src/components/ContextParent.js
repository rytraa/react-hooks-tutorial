import React,{useContext, useEffect} from 'react'
import { DateContext, UserContext } from '../App'
import ContextChild from './ContextChild'

function ContextParent() {
    useEffect(() => {
        console.log("ContextParent monuted.(using hook useContext)")
    }, [])

    const user = useContext(DateContext)
    const date = useContext(UserContext)

    return (
        <div>
            <ContextChild/>
            useContext created in {date} by {user}
        </div>
    )
}

export default ContextParent
