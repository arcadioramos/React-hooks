import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setstate] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                
                    setstate({
                        loading: false,
                        error: null,
                        data: data
                    })
                
                    
                


            })

    }, [url])

    return state;
}
