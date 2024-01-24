import { configureStore, Middleware } from "@reduxjs/toolkit";
import groupReducer from "../features/GroupSection/groupSlice";

// const loadFromLocalStorage = () => {
//   const storedState = localStorage.getItem("reduxState");
//   return storedState ? JSON.parse(storedState) : undefined;
// };
const saveToLocalStorage: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  return result;
};

export const store = configureStore({
  reducer: {
    group: groupReducer,
  },
  // preloadedState: loadFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
