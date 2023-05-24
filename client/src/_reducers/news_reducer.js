import { ALL_NEWS, STORAGE_NEWS } from '../_actions/types';

// reducer: previous state + current state = next state
export default function newsReducer(state = {}, action) {
  switch (action.type) {
    case ALL_NEWS:
      return { ...state, allNews: action.payload };

      case STORAGE_NEWS:
        return { ...state, storageNews: action.payload };

    default:
      return state;
  }
}