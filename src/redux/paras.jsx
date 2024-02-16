import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getParasAsync = createAsyncThunk('paras/getParasAsync', async ({ paras, format }) => {
  const res = await axios(`${import.meta.env.VITE_API_URL}paras=${paras}&format=${format}`);
  return res.data;
});

export const parasSlice = createSlice({
  name: 'paras',
  initialState: {
    items: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getParasAsync.fulfilled, (state, action) => {
        state.items = action.payload;
      })
  }
});

export const selectParas = (state) => state.paras.items;

export default parasSlice.reducer;
