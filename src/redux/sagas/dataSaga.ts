import { call, put, takeLatest, CallEffect, PutEffect } from 'redux-saga/effects';
import {
  fetchDataSuccess,
  fetchDataFailure,
  createDataSuccess,
  createDataFailure,
  deleteDataSuccess,
  deleteDataFailure,
  updateDataSuccess,
  updateDataFailure,
  CreateDataRequestAction,
  DeleteDataRequestAction,
  UpdateDataRequestAction,
} from '../actions/dataActions';
import {
  FETCH_DATA_REQUEST,
  CREATE_DATA_REQUEST,
  DELETE_DATA_REQUEST,
  UPDATE_DATA_REQUEST,
} from '../actions/dataActions';
import { fetchData, createData, deleteData, updateData } from '../../api/dataApi';
import { DataRecord, FetchDataResponse } from '../../types';

function* handleFetchData(): Generator<
  CallEffect<FetchDataResponse> | PutEffect,
  void,
  FetchDataResponse
> {
  try {
    const response: FetchDataResponse = yield call(fetchData);

    if (response.error_code !== 0) {
      throw new Error(response.error_text);
    }

    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchDataFailure(error.message));
    } else {
      yield put(fetchDataFailure('An unknown error occurred'));
    }
  }
}

function* handleCreateData(
  action: CreateDataRequestAction
): Generator<CallEffect<DataRecord> | PutEffect, void, DataRecord> {
  try {
    const response: DataRecord = yield call(createData, action.payload);
    yield put(createDataSuccess(response));
  } catch (error) {
    if (error instanceof Error) {
      yield put(createDataFailure(error.message));
    } else {
      yield put(createDataFailure('An unknown error occurred'));
    }
  }
}

function* handleDeleteData(
  action: DeleteDataRequestAction
): Generator<CallEffect<void> | PutEffect, void, void> {
  try {
    yield call(deleteData, action.payload);
    yield put(deleteDataSuccess(action.payload));
  } catch (error) {
    if (error instanceof Error) {
      yield put(deleteDataFailure(error.message));
    } else {
      yield put(deleteDataFailure('An unknown error occurred'));
    }
  }
}

function* handleUpdateData(
  action: UpdateDataRequestAction
): Generator<CallEffect<DataRecord> | PutEffect, void, DataRecord> {
  try {
    const response: DataRecord = yield call(updateData, action.payload.id, action.payload.data);
    yield put(updateDataSuccess(response));
  } catch (error) {
    if (error instanceof Error) {
      yield put(updateDataFailure(error.message));
    } else {
      yield put(updateDataFailure('An unknown error occurred'));
    }
  }
}

export default function* watchDataSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, handleFetchData);
  yield takeLatest(CREATE_DATA_REQUEST, handleCreateData);
  yield takeLatest(DELETE_DATA_REQUEST, handleDeleteData);
  yield takeLatest(UPDATE_DATA_REQUEST, handleUpdateData);
}
