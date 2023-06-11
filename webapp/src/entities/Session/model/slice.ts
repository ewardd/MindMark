import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logout } from '@shared/model';

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
    setAccessToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, action.payload);
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(logout, (state) => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      state.accessToken = null;
    }),
});

export default sessionSlice.reducer;

export const { setAccessToken } = sessionSlice.actions;
