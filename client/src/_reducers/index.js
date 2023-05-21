import { combineReducers } from "redux";
import user from './user_reducer';

// Combine multiple reducers into one
const rootReducer = combineReducers({
  user,
});

export default rootReducer;