import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/authActions';

interface AuthState {
  loading: boolean;
  token: string | null;
  error: string | null;
  username: string | null;
}

const initialState: AuthState = {
  loading: false,
  token: localStorage.getItem('token'),
  error: null,
  username: localStorage.getItem('username') || null,
};

export const authReducer = (state = initialState, action: any) => {
  // export const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      localStorage.setItem('username', action.payload.username);
      return { ...state, loading: true, error: null, username: action.payload.username };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload);
      return { ...state, loading: false, token: action.payload };
    case LOGIN_FAILURE:
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      return { ...state, loading: false, error: action.payload, username: null };
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      return { ...state, loading: false, token: null, username: null, error: null };
    default:
      return state;
  }
};
