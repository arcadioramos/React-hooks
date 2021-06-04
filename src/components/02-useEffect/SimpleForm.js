import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import './effects.css'

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: '',
        email: '',
        telephone: '',
    })

    const { name, email,telephone } = formState;

    useEffect(() => {
        console.log("Hey")
    }, [])
    useEffect(() => {
        console.log("Email cambió")
    }, [email])
    useEffect(() => {
        console.log("Télefono cambió")
    }, [telephone])

    const handleInputChange = (({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value

        })

    })
    
    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Ingresa tu nombre" autoComplete="off" value={name} onChange={handleInputChange}></input>

            </div>
            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="Ingresa tu email" autoComplete="off" value={email} onChange={handleInputChange}></input>

            </div>
            <div className="form-group">
                <input type="text" name="telephone" className="form-control" placeholder="Ingresa tu télefono" autoComplete="off" value={telephone} onChange={handleInputChange}></input>

            </div>

            {name === '123' && <Message/>}
        </>
    )
}
