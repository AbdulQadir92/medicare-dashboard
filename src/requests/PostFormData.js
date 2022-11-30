

const PostFormData = (url, authTokens, formData, setState = null) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + String(authTokens?.access)
        },
        body: formData
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

export default PostFormData