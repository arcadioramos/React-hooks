import React, { useState } from 'react'
import { UserContext } from './UserContext'
import { AppRouter } from './AppRouter'

export const MainApp = () => {

    const [User, setUser] = useState({})


    return (
        <UserContext.Provider value={{
            User,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>

    )
}
