import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const generateNounWord = createAsyncThunk(
  "word/generateNounWord",
  async (length, { rejectWithValue }) => {
    try {
      const response = await api.generateNounWord(length);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const wordSlice = createSlice({
  name: "word",
  initialState: {
    word: {},
    error: "",
  }, //allows you to respond to an action in your slice reducer but does not create an action creator function.
  extraReducers: {
    [generateNounWord.pending]: (state, action) => {
      state.loading = true;
    },
    [generateNounWord.fulfilled]: (state, action) => {
      state.loading = false;
      state.word = action.payload;
    },
    [generateNounWord.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default wordSlice.reducer;
