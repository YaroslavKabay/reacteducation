import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getPosts = () => axiosInstance.get('/posts').then()
const getPost = (id) => axiosInstance.get('/posts' + id).then(value => value.data)

export {getPosts,getPost}