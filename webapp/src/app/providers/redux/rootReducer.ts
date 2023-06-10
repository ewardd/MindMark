import { combineReducers } from 'redux';
import { sessionSlice } from '@entities/Session';
import { userSlice } from '@entities/User';
import { baseApi } from '@shared/api';

export const rootReducer = combineReducers({
  sessionState: sessionSlice.reducer,
  userState: userSlice.reducer,

  [baseApi.reducerPath]: baseApi.reducer,
});
