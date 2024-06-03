import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CREATE_DATA_REQUEST,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_FAILURE,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAILURE,
  UPDATE_DATA_REQUEST,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAILURE,
  CLEAR_DATA_ERROR,
} from '../actions/dataActions';
import { DataRecord } from '../../types';

interface DataState {
  data: DataRecord[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

export const dataReducer = (state = initialState, action: any): DataState => {
  // export const dataReducer = (state = initialState, action: DataActionTypes): DataState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
    case CREATE_DATA_REQUEST:
    case DELETE_DATA_REQUEST:
    case UPDATE_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case CREATE_DATA_SUCCESS:
      return { ...state, loading: false, data: [...state.data, action.payload] };
    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map((item) => (item.id === action.payload.id ? action.payload : item)),
      };
    case FETCH_DATA_FAILURE:
    case CREATE_DATA_FAILURE:
    case DELETE_DATA_FAILURE:
    case UPDATE_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_DATA_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
