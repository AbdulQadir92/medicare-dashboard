
const PostRequest = (url, authTokens, data, setState = null) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens?.access)
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not post data');
            }
            return res.json();
        })
        .then(data => {
            // console.log(data);
            if (setState) { setState(data) }
        })
        .catch(error => {
            console.log(error);
            if (setState) { setState(error) }
        })
}

export default PostRequest