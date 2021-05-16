const submitData = (name, email) => {
    const data = {
        name,
        email
    };

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return fetch('http://localhost:3000/users', config)
        .then(res => res.json())
        .then(result => {
            return document.body.innerHTML += result.id
        })
        .catch(e => {
            return document.body.innerHTML += 'Unauthorized Access'
        })
}