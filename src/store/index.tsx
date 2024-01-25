import { configureStore, Middleware } from "@reduxjs/toolkit";
import groupReducer from "../features/GroupSection/groupSlice";
import notesReducer from "../features/NotesSection/notesSlice";

const saveToLocalStorage: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  return result;
};

export const store = configureStore({
  reducer: {
    group: groupReducer,
    notes: notesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
