import { enhancer } from '@dreamworld/addon-redux';
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api';
import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([baseApi.middleware]),
  enhancers: [enhancer],
});

export default store;
