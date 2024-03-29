import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import data from './slices/dataSlice';

const store = configureStore({
  reducer: {
    data,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;


export default store;
