import React from 'react'
import { UseCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

  const {counter,increment} =  UseCounter(1)

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //Si existe la data extraerá la posición [0] de la data
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr />
            {

                loading
                    ?

                    (
                        <div className="alert alert-info text-center">

                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>

                        </blockquote>
                    )
            }

            <button onClick={increment}>Siguiente</button>
        </div>
    )
}
