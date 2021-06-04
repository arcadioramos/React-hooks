import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('me cargué de nuevo')

    return (
        <small>
            {value}
        </small>
    )
});
