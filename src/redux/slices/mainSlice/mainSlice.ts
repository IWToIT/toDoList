import { createSlice } from '@reduxjs/toolkit';
import { setItemsReducer } from './reducers/mainReducer';
import { Status } from './types/mainTypes';

export type ToDo = {
  id: number;
  title: string;
};

const initialState: {
  data: ToDo[] | null;
  loading: boolean;
  error: string | null;
  status: Status;
} = {
  data: null,
  loading: false,
  error: null,
  status: Status.LOADING,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setItems: setItemsReducer,
  },
});

export const { setItems } = dataSlice.actions;

export default dataSlice.reducer;
