import React, { useMemo, useState } from 'react'
import { ProcesoPesado } from '../../Helpers/ProcesoPesado';
import { UseCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'


export const MemoHook = () => {

    const { counter, increment } = UseCounter(1000);
    const [Show, setShow] = useState(true)

   

  const MemoProcesoPesado =  useMemo(() => ProcesoPesado(counter), [counter]);
    

    return (
        <div>

            <h1>Memo Hook</h1>
            <h3>Counter:{counter}</h3>
            <hr></hr>

            <p>{MemoProcesoPesado}</p>


            <button className="btn btn-primary" onClick={increment}>+1</button>

            <button className="btn btn-outline-primary mt-3" onClick={() => { setShow(!Show) }}>Show/Hide {JSON.stringify(Show)}</button>
        </div>


    )
}
