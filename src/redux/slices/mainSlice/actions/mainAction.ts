import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ToDo } from '../types/mainTypes';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const { data } = await axios.get<ToDo[]>('http://localhost:5500/');
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
});
