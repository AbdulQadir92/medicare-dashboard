
const FetchRequest = (url, authTokens, setState = null, func = null, logout = null) => {
    const abortController = new AbortController();
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
            console.log(data);
            if (setState) { setState(data) }
            if (func) { func(data) }
        })
        .catch(error => {
            if (logout) { logout() }
            if (setState) { setState(error) }
        })
    return () => abortController.abort()
}

export default FetchRequest