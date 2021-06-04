import React, { useState } from 'react'

import {MultipleCustomHooks} from '../../components/samples/MultipleCustomHooks'
import '../02-useEffect/effects.css'

export const RealExampleRef = () => {

    const [Show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr></hr>


            { Show && <MultipleCustomHooks/>}

            <button className="btn btn-primary mt-5" onClick={ ()=>{setShow(!Show)}}>Mostrar/Ocultar</button>
         </div>
    )
}
