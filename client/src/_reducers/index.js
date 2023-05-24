import { combineReducers } from "redux";
import user from './user_reducer';
import comment from './comment_reducer';
import news from './news_reducer';

// Combine multiple reducers into one
const rootReducer = combineReducers({
  user,
  comment,
  news
});

export default rootReducer;