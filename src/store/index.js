import authReducer from '@/features/auth/authSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import persistConfig from './persistConfig';

/**
 * Combine all reducers
 */
const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers here as the app grows
});

/**
 * Create persisted reducer
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Configure Redux store with persisted reducer
 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: import.meta.env.VITE_NODE_ENV !== 'production',
});

/**
 * Create persistor for PersistGate
 */
export const persistor = persistStore(store);

/**
 * Custom hooks for typed dispatch and selector
 * Use these throughout your app instead of plain `useDispatch` and `useSelector`
 */
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
