import { LoginRequestPayload } from '../../types';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';

export const loginRequest = (username: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: { username, password } as LoginRequestPayload,
});

export const loginSuccess = (token: string) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: LoginRequestPayload;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;
