import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "links",
  whitelist: ["locale", "auth"],
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk],
});

export const persistor = persistStore(store);
