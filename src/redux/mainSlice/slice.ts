import { createSlice } from '@reduxjs/toolkit';
import { IMainSlice } from './types';
import { setError, setLoading } from './reducers';

const initialState: IMainSlice = {
  loading: false,
  error: null,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setError,
    setLoading,
  },
});

export default mainSlice.reducer;
