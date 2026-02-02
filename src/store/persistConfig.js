import storage from 'redux-persist/lib/storage'; // defaults to localStorage

/**
 * Redux Persist configuration
 * Persists auth state to localStorage
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only persist auth reducer
  version: 1,
};

export default persistConfig;
