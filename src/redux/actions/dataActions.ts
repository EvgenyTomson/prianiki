import { DataRecord } from '../../types';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const CREATE_DATA_REQUEST = 'CREATE_DATA_REQUEST';
export const CREATE_DATA_SUCCESS = 'CREATE_DATA_SUCCESS';
export const CREATE_DATA_FAILURE = 'CREATE_DATA_FAILURE';

export const DELETE_DATA_REQUEST = 'DELETE_DATA_REQUEST';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';

export const UPDATE_DATA_REQUEST = 'UPDATE_DATA_REQUEST';
export const UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCESS';
export const UPDATE_DATA_FAILURE = 'UPDATE_DATA_FAILURE';

export const CLEAR_DATA_ERROR = 'CLEAR_DATA_ERROR';

export const clearDataError = () => ({
  type: CLEAR_DATA_ERROR,
});

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: DataRecord[]) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const createDataRequest = (data: DataRecord) => ({
  type: CREATE_DATA_REQUEST,
  payload: data,
});

export const createDataSuccess = (data: DataRecord) => ({
  type: CREATE_DATA_SUCCESS,
  payload: data,
});

export const createDataFailure = (error: string) => ({
  type: CREATE_DATA_FAILURE,
  payload: error,
});

export const deleteDataRequest = (id: string) => ({
  type: DELETE_DATA_REQUEST,
  payload: id,
});

export const deleteDataSuccess = (id: string) => ({
  type: DELETE_DATA_SUCCESS,
  payload: id,
});

export const deleteDataFailure = (error: string) => ({
  type: DELETE_DATA_FAILURE,
  payload: error,
});

export const updateDataRequest = (id: string, data: DataRecord) => ({
  type: UPDATE_DATA_REQUEST,
  payload: { id, data },
});

export const updateDataSuccess = (data: DataRecord) => ({
  type: UPDATE_DATA_SUCCESS,
  payload: data,
});

export const updateDataFailure = (error: string) => ({
  type: UPDATE_DATA_FAILURE,
  payload: error,
});

export interface ClearDateErrorAction {
  type: typeof CLEAR_DATA_ERROR;
}

export interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

export interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: DataRecord[];
}

export interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export interface CreateDataRequestAction {
  type: typeof CREATE_DATA_REQUEST;
  payload: DataRecord;
}

export interface CreateDataSuccessAction {
  type: typeof CREATE_DATA_SUCCESS;
  payload: DataRecord;
}

export interface CreateDataFailureAction {
  type: typeof CREATE_DATA_FAILURE;
  payload: string;
}

export interface DeleteDataRequestAction {
  type: typeof DELETE_DATA_REQUEST;
  payload: string;
}

export interface DeleteDataSuccessAction {
  type: typeof DELETE_DATA_SUCCESS;
  payload: string;
}

export interface DeleteDataFailureAction {
  type: typeof DELETE_DATA_FAILURE;
  payload: string;
}

export interface UpdateDataRequestAction {
  type: typeof UPDATE_DATA_REQUEST;
  payload: {
    id: string;
    data: DataRecord;
  };
}

export interface UpdateDataSuccessAction {
  type: typeof UPDATE_DATA_SUCCESS;
  payload: DataRecord;
}

export interface UpdateDataFailureAction {
  type: typeof UPDATE_DATA_FAILURE;
  payload: string;
}

export type DataActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction
  | CreateDataRequestAction
  | CreateDataSuccessAction
  | CreateDataFailureAction
  | DeleteDataRequestAction
  | DeleteDataSuccessAction
  | DeleteDataFailureAction
  | UpdateDataRequestAction
  | UpdateDataSuccessAction
  | UpdateDataFailureAction
  | ClearDateErrorAction;
