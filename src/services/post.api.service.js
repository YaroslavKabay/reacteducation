import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getPosts = () => axiosInstance.get('/posts').then()
const getPost = (id) => axiosInstance.get('/posts' + id).then(value => value.data) // then is needed when you have async func
// const getPost = (id) => axiosInstance.get('/' + id).then(value => value.data) ^^ the same way, however, please paste post in base URL

export {getPosts,getPost}  