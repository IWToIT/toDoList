import { PayloadAction } from '@reduxjs/toolkit';
import { IMainSlice, TMainError } from './types';

export const setLoading = (state: IMainSlice, action: PayloadAction<boolean>) => {
  const newState = {
    ...state,
    loading: action.payload,
  };

  return newState;
};

export const setError = (state: IMainSlice, action: PayloadAction<TMainError>) => {
  const newState = {
    ...state,
    error: action.payload,
  };

  return newState;
};

