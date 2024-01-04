import { PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './types';

export const addToDo = (state: Todo[], action: PayloadAction<string>) => {
  const newTodo: Todo = {
    id: new Date().toString(),
    title: action.payload,
    error: null,
    completed: false,
  };

  return [newTodo, ...state];
};

export const toggleTodo = (state: Todo[], action: PayloadAction<Todo['id']>) => {
  const todo = state.find(el => el.id === action.payload);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

export const removeTodo = (state: Todo[], action: PayloadAction<Todo['id']>) =>
  state.filter(el => el.id !== action.payload);
