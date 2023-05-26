import { ALL_NEWS, REMOVE_STORAGE_NEWS, SEARCH_NEWS, STORAGE_NEWS } from '../_actions/types';

// reducer: previous state + current state = next state
export default function newsReducer(state = {}, action) {
  switch (action.type) {
    case ALL_NEWS:
      return { ...state, allNews: action.payload };

    case SEARCH_NEWS:
      return { ...state, searchNews: action.payload };

    case STORAGE_NEWS:
      return { ...state, storageNews: action.payload };

    case REMOVE_STORAGE_NEWS:
      return {
        ...state,
        storageNews: { data: state.storageNews.data.filter(news => news.url !== action.payload.data[0].url) }
      };

    default:
      return state;
  }
}