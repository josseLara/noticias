import { ALL_NEWS } from '../_actions/types';

// reducer: previous state + current state = next state
export default function newsReducer(state = {}, action) {
  switch (action.type) {
    case ALL_NEWS:
      return { ...state, allNews: action.payload };

    default:
      return state;
  }
}