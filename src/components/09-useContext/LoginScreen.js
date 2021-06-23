import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { User, setUser } = useContext(UserContext)

    console.log(User, setUser)

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => setUser({ id: 12, name: "Arcadio" })}
            >Cambiar</button>
            <h1>{JSON.stringify(User, null, 3)}</h1>
        </div>
    )
}
