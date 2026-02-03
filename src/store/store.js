import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage/session';
import slices, { nonPersistSlice } from './slices';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, slices);
const nonPersistedReducer = nonPersistSlice.reducer;
export const store = configureStore({
  reducer: {
    states: persistedReducer,
    nonPersistedState: nonPersistedReducer,
  },
});

export const persistor = persistStore(store);
