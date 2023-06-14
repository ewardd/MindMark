import { combineReducers } from 'redux';
import { sessionSlice } from '@entities/Session';
import { baseApi } from '@shared/api';

export const rootReducer = combineReducers({
  sessionState: sessionSlice.reducer,

  [baseApi.reducerPath]: baseApi.reducer,
});
