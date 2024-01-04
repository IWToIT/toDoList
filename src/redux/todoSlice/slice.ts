import { createSlice } from '@reduxjs/toolkit';
import { Todo } from './types';
import { addToDo, toggleTodo, removeTodo } from './reducers';

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo,
    toggleTodo,
    removeTodo,
  },
});

export default todoSlice.reducer;
