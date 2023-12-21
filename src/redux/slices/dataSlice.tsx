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
    throw new Error(`Failed to fetch data: ${error.message}`);
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
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = Status.LOADING;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<ToDo[]>) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action: PayloadAction<string>) => {
        state.status = Status.ERROR;
        state.error = action.payload;
      });
  },
});

export const selectToDoData = (state: RootState) => state.data;

export const { setItems } = dataSlice.actions;

export default dataSlice.reducer;
