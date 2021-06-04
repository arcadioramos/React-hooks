import React from 'react'
import { UseCounter } from '../../hooks/useCounter';
import './Counter.css'

export const CounterWithCustomHook = () => {


    const { state, increment, decrement,reset } = UseCounter(100);


    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr />

            <button onClick={()=>increment(4)} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
            <button onClick={()=>decrement(2)} className="btn btn-primary">-1</button>
        </>
    )
}
