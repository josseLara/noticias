import axios from 'axios';
import { ALL_COMMENTS, SAVE_COMMENTS } from './types';

// Action creator to save a comment
export function saveComment(dataToSubmit) {
  const request = axios
    .post('http://localhost:8080/api/comment/saveComment', dataToSubmit)
    .then((response) => response.data);

  return {
    type: SAVE_COMMENTS, // Action type to save comments
    payload: request,
  };
}

// Action creator to get all comments
export function getComment(dataToSubmit) {
  const request = axios
    .post('http://localhost:8080/api/comment/getComments', dataToSubmit)
    .then((response) => response.data);

  return {
    type: ALL_COMMENTS, // Action type to get all comments
    payload: request,
  };
}