import { ALL_NEWS, REMOVE_STORAGE_NEWS, STORAGE_NEWS } from '../_actions/types';

// reducer: previous state + current state = next state
export default function newsReducer(state = {}, action) {
  switch (action.type) {
    case ALL_NEWS:
      return { ...state, allNews: action.payload };

    case STORAGE_NEWS:
      return { ...state, storageNews: action.payload };

    case REMOVE_STORAGE_NEWS:
      return {
        ...state,
        storageNews: state.storageNews.data.filter(news => news.url !== action.payload.url)
      };

    default:
      return state;
  }
}