import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
  /** When true, the app shows the main stack; when false, the auth stack. */
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    signOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthenticated, signOut } = authSlice.actions;
export default authSlice.reducer;
