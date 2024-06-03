import { call, put, takeLatest, CallEffect, PutEffect } from 'redux-saga/effects';
import {
  loginSuccess,
  loginFailure,
  LoginRequestAction,
  LOGIN_REQUEST,
} from '../actions/authActions';
import { login } from '../../api/authApi';
import { AuthResponse } from '../../types';

function* handleLogin(
  action: LoginRequestAction
): Generator<CallEffect<AuthResponse> | PutEffect, void, AuthResponse> {
  try {
    const response: AuthResponse = yield call(
      login,
      action.payload.username,
      action.payload.password
    );

    if (response.error_code !== 0) {
      throw new Error(response.error_text);
    }

    yield put(loginSuccess(response.data.token));
  } catch (error) {
    if (error instanceof Error) {
      yield put(loginFailure(error.message));
    } else {
      yield put(loginFailure('An unknown error occurred'));
    }
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}
