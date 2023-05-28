import { LOGIN_USER, REGISTER_USER, AUTH_USER, UPDATE_USER } from '../_actions/types';

// Reducer for handling user data
export default function userReducer(state = {}, action) {
  switch (action.type) {
    // Updates the state with the login success status
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    // Updates the state with the registration status
    case REGISTER_USER:
      return { ...state, register: action.payload };

    // Updates the state with the user data
    case UPDATE_USER:
      return { ...state, userData: { ...state.userData, ...action.payload } };

    // Updates the state with the authenticated user data
    case AUTH_USER:
      return { ...state, userData: action.payload };

    // Default case, returns the current state
    default:
      return state;
  }
}