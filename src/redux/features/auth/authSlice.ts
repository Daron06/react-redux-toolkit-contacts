import { RootState } from './../../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  fullName: null,
  avatarUrl: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string; token: string }>) => {
      localStorage.setItem(
        'user',
        JSON.stringify({ name: action.payload.name, token: action.payload.token })
      );
      state.fullName = action.payload.name;
      state.token = action.payload.token;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
