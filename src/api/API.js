
import axios from 'axios';

let axiosInstatce = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
const getUsers = () => axiosInstatce.get('/users');

const getPosts = () => axiosInstatce.get('/posts');
const getPostsofUser = (id) => axiosInstatce.get('/posts' + `?userId=${id}`);

const getComments = () => axiosInstatce.get('/comments');
const getCommentsofPost = (id) => axiosInstatce.get('/comments' + `?postId=${id}`);

export {getUsers, getPosts, getComments, getPostsofUser, getCommentsofPost}