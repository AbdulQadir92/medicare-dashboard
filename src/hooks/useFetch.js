import { useState, useEffect, useContext } from "react";
import AuthContext from "../contexts/AuthContext";


const useFetch = (url) => {
    const { authTokens } = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const abortController = new AbortController();
    useEffect(() => {
        fetch(url, {
            signal: abortController.signal,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + String(authTokens?.access)
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            })
        return () => abortController.abort()
    }, [])
    return [data, error]
}

export default useFetch