import axios from 'axios';
import { ALL_NEWS } from './types';


export function getNewsGeneral(category) {
  const request = axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=`)
    .then((response) => response.data);

  return {
    type: ALL_NEWS,
    payload: request,
  };
}




