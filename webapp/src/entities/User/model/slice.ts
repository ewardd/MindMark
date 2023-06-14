import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@shared/api';
import { logout } from '@shared/hooks';

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => builder.addCase(logout, () => initialState),
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
