import { ALL_NEWS, REMOVE_STORAGE_NEWS, SEARCH_NEWS, STORAGE_NEWS } from '../_actions/types';

// Reducer for handling news
export default function newsReducer(state = {}, action) {
  switch (action.type) {
    // Gets all news and adds them to the state
    case ALL_NEWS:
      return { ...state, allNews: action.payload };

    // Searches news and adds them to the state
    case SEARCH_NEWS:
      return { ...state, searchNews: action.payload };

    // Saves news to the state
    case STORAGE_NEWS:
      return { ...state, storageNews: action.payload };

    // Removes news from the state
    case REMOVE_STORAGE_NEWS:
      return {
        ...state,
        storageNews: { data: state.storageNews.data.filter(news => news.url !== action.payload.data[0].url) }
      };

    // Default case, returns the current state
    default:
      return state;
  }
}