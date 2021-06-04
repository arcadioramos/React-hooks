import React, { useState } from 'react'
import './Counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
    const {counter1,counter2} = counter;

    return (
        <div>
            <h1>Counter {counter1}</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => { 
                    setCounter(
                        {
                            ...counter,
                            counter1: counter1 +1,
                        }
                    )
                }}
            >+1</button>
        </div>
    )
}
