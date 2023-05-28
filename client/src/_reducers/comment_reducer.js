import { ALL_COMMENTS, SAVE_COMMENTS } from '../_actions/types';

// Reducer for handling comments
export default function commentReducer(state = {}, action) {
  switch (action.type) {
    // Saves comments to the state
    case SAVE_COMMENTS:
      return { ...state, newsData: action.payload };

    // Gets all comments and adds them to the state
    case ALL_COMMENTS:
      return { ...state, allComment: action.payload };

    // Default case, returns the current state
    default:
      return state;
  }
}