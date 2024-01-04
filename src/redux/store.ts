import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './mainSlice';
import { todoSlice } from './todoSlice';

export const store = configureStore({
  reducer: {
    main: mainSlice,
    todo: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
