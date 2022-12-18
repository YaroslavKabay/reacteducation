const createUser = (item) => {

    return fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST', // http method, patch update obj, put замінити обєкт
        body: JSON.stringify(item),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
        .then(response => response.json())
};

export {createUser};




