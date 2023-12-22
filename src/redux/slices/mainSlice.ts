import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

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
  status: Status.LOADING
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const { data } = await axios.get<ToDo[]>("http://localhost:5500/");
    return data;
  } catch (error) {
    console.log((error as Error).message)
  }
});

export const enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setItems(state, action) {
      state.data = action.payload;
    },
  },
});

export const selectToDoData = (state: RootState) => state.data;

export const { setItems } = dataSlice.actions;

export default dataSlice.reducer;

// разделить по папкам селекторы, экшены, запросы, типизацию