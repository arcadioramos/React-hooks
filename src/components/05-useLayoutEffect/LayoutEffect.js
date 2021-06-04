import React from 'react'
import { UseCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const LayoutEffect = () => {

  const {counter,increment} =  UseCounter(1)

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //Si existe la data extraerá la posición [0] de la data
    const  {quote } = !!data && data[0];

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
                    
                        <blockquote className="blockquote text-right">
                            <p className="mb-1">{quote}</p>
                           

                        </blockquote>
                    
            

            <button onClick={increment}>Siguiente</button>
        </div>
    )
}
