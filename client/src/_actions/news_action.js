import axios from 'axios';
import { ALL_NEWS, REMOVE_STORAGE_NEWS, SEARCH_NEWS, STORAGE_NEWS } from './types';

// ----------------> API REST <-------------------

// Action creator to get all news from a category
export function getNewsGeneral(category) {
  
  const request = axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=`)
    .then((response) => response.data);

  return {
    type: ALL_NEWS, // Action type to get all news
    payload: request,
  };
}

// Action creator to get news from a category with pagination
export function getNewsPagination(category,pagination) {
  const request = axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=20&page=${pagination}&apiKey=`)
    .then((response) => response.data);

  return {
    type: ALL_NEWS, // Action type to get all news
    payload: request,
  };
}

// Action creator to search news
export function getSearchNews(search) {
  const request = axios
    .get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=`)
    .then((response) => response.data);

  return {
    type: SEARCH_NEWS, // Action type to search news
    payload: request,
  };
}


// ----------------> STORAGE <-------------------

// Action creator to get saved news from the server
export function getStorageNews(user) {
  const request = axios
    .post(`http://localhost:8080/api/savedNews/getSaveNews`,user)
    .then((response) => response.data);

  return {
    type: STORAGE_NEWS, // Action type to get saved news
    payload: request,
  };
}

// Action creator to save news to the server
export function saveStorageNews(news) {
  const request = axios
    .post(`http://localhost:8080/api/savedNews/save`,news)
    .then((response) => response.data);

  return {
    type: STORAGE_NEWS, // Action type to save news
    payload: request,
  };
}

// Action creator to remove news from the server
export function removeStorageNews(news) {
  const request = axios
    .post(`http://localhost:8080/api/savedNews/remove`,news)
    .then((response) => response.data);

  return {
    type: REMOVE_STORAGE_NEWS, // Action type to remove news
    payload: request,
  };
}