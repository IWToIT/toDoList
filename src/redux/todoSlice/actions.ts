import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Todo } from './types';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const { data } = await axios.get<Todo[]>('http://localhost:5500/');
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
});
