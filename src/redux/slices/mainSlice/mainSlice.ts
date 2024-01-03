import { createSlice } from '@reduxjs/toolkit';
import { ToDo } from './types/mainTypes';
import { addToDo } from './reducers/mainReducer';

export const initialState: ToDo[] = [];

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addToDo,
  },
});

export default mainSlice.reducer;
