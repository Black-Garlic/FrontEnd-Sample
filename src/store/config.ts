import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { commonApi } from "@services/common/commonApi";
import commonSlice from "@services/common/commonSlice";

const rootReducer = combineReducers({
  commonApi: commonApi.reducer,
  commonSlice: commonSlice.reducer,
});

export const apiMiddleware = [commonApi.middleware];

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [commonApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...apiMiddleware),
});

export let persistor = persistStore(store);

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
