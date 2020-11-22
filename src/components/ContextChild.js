import React,{useEffect} from 'react'
import {UserContext, DateContext} from '../App'

function ContextChild() {
    useEffect(() => {
        console.log("ContextChild monuted. (using React.createContext)")
    }, [])
    return (
        <div>
            <UserContext.Consumer >
                {
                    user => {
                        return (
                        <DateContext.Consumer>
                            {
                                date => {
                                return <div>Context created at {date} by {user}</div> 
                                }
                            }
                        </DateContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ContextChild
