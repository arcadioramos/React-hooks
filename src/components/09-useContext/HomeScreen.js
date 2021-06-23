import React,{useContext} from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const {User}= useContext(UserContext)

    console.log(User)
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>

            <pre>
                {JSON.stringify(User,null,3)}
            </pre>
        </div>
    )
}
