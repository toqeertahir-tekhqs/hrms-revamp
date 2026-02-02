import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial auth state
 */
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

/**
 * Auth slice
 * Manages authentication state (user, token, isAuthenticated)
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Login action
     * @param {object} action.payload - { user, token }
     */
    login: (state, action) => {
      const { user, token, permissions = [] } = action.payload;
      state.user = user;
      state.token = token;
      state.permissions = permissions;
      state.isAuthenticated = true;
    },
    
    /**
     * Logout action
     * Clears all auth state
     */
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.permissions = [];
      state.isAuthenticated = false;
    },
    
    /**
     * Update user action
     * Updates user info without changing token
     */
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

// Export actions
export const { login, logout, setUser } = authSlice.actions;

// Export selectors
export const selectUserPermissions = (state) => state.auth.permissions;

// Export reducer
export default authSlice.reducer;
