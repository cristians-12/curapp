import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
  user: unknown;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

/**
 * Slice de autenticación (placeholder).
 * Agregar aquí los reducers y actions del feature:
 *
 *   reducers: {
 *     setCredentials(state, action: PayloadAction<...>) { ... },
 *     logout(state) { ... },
 *   }
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;
