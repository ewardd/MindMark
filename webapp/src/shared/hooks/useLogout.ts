import { createAction } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { baseApi } from '@shared/api';

/**
 * Logout action. Should be used in every slice to reset the state to initial.
 *
 * @example
 * export const someSlice = createSlice({
 *   initialState,
 *   extraReducers: (builder) => builder.addCase(logout, () => initialState),
 * });
 */
export const logout = createAction('LOGOUT_RESET');

export const useLogout = () => {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
  }, [dispatch]);

  return onLogout;
};
