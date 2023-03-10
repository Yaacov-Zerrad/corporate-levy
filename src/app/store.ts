import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import servicesReducer from '../features/servicesSlice';
import postsReducer from '../features/postsSlice'
import stateSlice from '../features/stateSlice'



export const store = configureStore({
  reducer: {
    services: servicesReducer,
    posts: postsReducer,
    state: stateSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
