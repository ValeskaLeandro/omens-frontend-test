import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import moviesReducer from '@/redux/slices/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  }
})


export default store

// Doc: https://redux.js.org/usage/nextjs
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>