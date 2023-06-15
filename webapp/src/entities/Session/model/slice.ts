import { createSlice } from '@reduxjs/toolkit';
import { setAuthTokens } from '@shared/api';
import { logout } from '@shared/hooks';

const LOCAL_STORAGE_KEY = 'token';
const LOCAL_STORAGE_REFRESH_KEY = 'token_refresh';

interface ISessionState {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: ISessionState = {
  accessToken: localStorage.getItem(LOCAL_STORAGE_KEY),
  refreshToken: localStorage.getItem(LOCAL_STORAGE_REFRESH_KEY),
};

export const sessionSlice = createSlice({
  initialState,
  name: 'sessionSlice',
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(setAuthTokens, (state, action) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, action.payload.accessToken);
        localStorage.setItem(LOCAL_STORAGE_REFRESH_KEY, action.payload.refreshToken);
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(logout, (state) => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        localStorage.removeItem(LOCAL_STORAGE_REFRESH_KEY);
        state.accessToken = null;
        state.refreshToken = null;
      }),
});

export default sessionSlice.reducer;
