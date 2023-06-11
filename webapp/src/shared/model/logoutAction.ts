import { createAction } from '@reduxjs/toolkit';

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
