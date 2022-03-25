import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';

// console.log(localStorage.getItem('persist:root'));

// const local = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken
const local = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser
const TOKEN = local ? local.accessToken : ''; 

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const UserRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});
