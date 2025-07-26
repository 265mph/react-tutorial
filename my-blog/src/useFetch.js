import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, isPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortFetch = new AbortController();

        setTimeout(() => {
            
            fetch(url, {signal: abortFetch.signal})
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    isPending(false)
                    setError(null)
                })
                .catch(err => {
                    if(err.name === 'AbortError') {
                        console.log("Fetch aborted")
                    } else {
                        setError('Error fetching data')
                        isPending(false)
                        console.log('fetch error:',err.message)
                    }
                })
        }, 1200)

        return () => abortFetch.abort()
    }, [url]);

    return {data, pending, error}
}

export default useFetch