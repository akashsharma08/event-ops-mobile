import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type AppState = {
  /** Example persisted field — replace with real app preferences. */
  displayName: string | null;
};

const initialState: AppState = {
  displayName: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDisplayName(state, action: PayloadAction<string | null>) {
      state.displayName = action.payload;
    },
  },
});

export const { setDisplayName } = appSlice.actions;
export default appSlice.reducer;
