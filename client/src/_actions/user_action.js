import axios from 'axios';
import { REGISTER_USER, LOGIN_USER, AUTH_USER, UPDATE_USER } from './types';

// Logs in a user with the provided data
export function loginUser(dataToSubmit) {
  const request = axios
    .post('http://localhost:8080/api/user/login', dataToSubmit)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('x_token', token);

      return response.data;
    })

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

// Registers a new user with the provided data
export function registerUser(dataToSubmit) {
  const request = axios
    .post('http://localhost:8080/api/user/register', dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

// Updates a user's information with the provided data
export function updateUser(dataToSubmit) {
  const request = axios
    .put('http://localhost:8080/api/user/update', dataToSubmit)
    .then((response) => response.data);
    localStorage.removeItem('x_token');
  return {
    type: UPDATE_USER,
    payload: request,
  };
}

// Updates a user's profile photo with the provided data
export function updatePhotoUser(dataToSubmit) {
  const request = axios
    .put('http://localhost:8080/api/user/updatePhoto', dataToSubmit)
    .then((response) => response.data);
    // localStorage.removeItem('x_token');
  return {
    type: UPDATE_USER,
    payload: request,
  };
}

// Authenticates a user with the stored token
export function auth() {

  const token = localStorage.getItem('x_token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
  const request = axios.post('http://localhost:8080/api/user/auth', null).then((response) => response.data);
   
  return {
    type: AUTH_USER,
    payload: request,
  };
}