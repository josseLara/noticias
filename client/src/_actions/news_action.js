import axios from 'axios';
import { ALL_NEWS, STORAGE_NEWS } from './types';


export function getNewsGeneral(category) {
  const request = axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=`)
    .then((response) => response.data);

  return {
    type: ALL_NEWS,
    payload: request,
  };
}


export function getStorageNews(user) {
  const request = axios
    .post(`http://localhost:8080/api/savedNews/getSaveNews`,user)
    .then((response) => response.data);

  return {
    type: STORAGE_NEWS,
    payload: request,
  };
}


export function saveStorageNews(news) {
  const request = axios
    .post(`http://localhost:8080/api/savedNews/save`,news)
    .then((response) => response.data);

  return {
    type: STORAGE_NEWS,
    payload: request,
  };
}


