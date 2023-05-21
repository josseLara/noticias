import axios from 'axios';
import { ALL_COMMENTS, SAVE_COMMENTS } from './types';


export function saveComment(dataToSubmit) {
  const request = axios
    .post('http://localhost:8080/api/comment/saveComment', dataToSubmit)
    .then((response) => response.data);

  return {
    type: SAVE_COMMENTS,
    payload: request,
  };
}

export function getComment(dataToSubmit) {
  const request = axios
    .post('http://localhost:8080/api/comment/getComments', dataToSubmit)
    .then((response) => response.data);

  return {
    type: ALL_COMMENTS,
    payload: request,
  };
}


