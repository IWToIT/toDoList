import { configureStore } from '@reduxjs/toolkit';
import main from './slices/mainSlice/mainSlice';

export const store = configureStore({
  reducer:  {
    main,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch