let baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => fetch(baseUrl).then(value => value.json())