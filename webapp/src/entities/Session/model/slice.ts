import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LOCAL_STORAGE_KEY = 'token';

interface ISessionState {
  accessToken: string | null;
}

const initialState: ISessionState = {
  accessToken: localStorage.getItem(LOCAL_STORAGE_KEY),
};

export const sessionSlice = createSlice({
  initialState,
  name: 'sessionSlice',
  reducers: {
    logout: (state) => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      state.accessToken = null;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, action.payload);
      state.accessToken = action.payload;
    },
  },
});

export default sessionSlice.reducer;

export const { logout, setAccessToken } = sessionSlice.actions;
