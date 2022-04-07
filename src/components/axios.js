import axios from 'axios';

export default axios.create({
    baseURL: 'https://login-todo-list-122a0-default-rtdb.firebaseio.com/'
});