import { ALL_COMMENTS, SAVE_COMMENTS } from '../_actions/types';

// reducer: previous state + current state = next state
export default function commentReducer(state = {}, action) {
  switch (action.type) {
    case SAVE_COMMENTS:
      return { ...state, newsData: action.payload };

    case ALL_COMMENTS:
      return { ...state, allComment: action.payload };

    default:
      return state;
  }
}