import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from './reducers/authReducer';
import { dataReducer } from './reducers/dataReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
