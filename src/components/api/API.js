
import axios from 'axios';

let axiosInstatce = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
const getUsers = () => axiosInstatce.get('/users');
const getPosts = () => axiosInstatce.get('/posts');
const getComments = () => axiosInstatce.get('/comments');

export {getUsers, getPosts, getComments}