import axios from 'axios';
import { REGISTER_USER, LOGIN_USER, AUTH_USER } from './types';

export function loginUser(dataToSubmit) {
  const request = axios
    .post('http://localhost:8080/api/user/login', dataToSubmit)
    .then(response => {
      const token = response.headers['x-auth-token'];
      document.cookie = `x_token=${token}; path=/;`;
      return response.data
    })

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post('http://localhost:8080/api/user/register', dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {

  const request = axios.post('http://localhost:8080/api/user/auth', null, {
    // withCredentials: true,
  }).then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}