import React, { useState } from 'react'
import { UseCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = UseCounter(10);
    const [Show, setShow] = useState(true)


    return (
        <div>
            <h1>Counter:<Small value={counter}></Small></h1>
            <hr></hr>


            <button className="btn btn-primary" onClick={increment}>+1</button>

            <button className="btn btn-outline-primary mt-3"onClick={()=>{setShow(!Show)}}>Show/Hide {JSON.stringify(Show)}</button>
        </div>

        
    )
}
