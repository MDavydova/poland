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

const WordSlice = createSlice({
  name: "word",
  initialState: {
    word: {},
    error: "",
  }, //allows you to respond to an action in your slice reducer but does not create an action creator function.
  extraReducers: {
    [getCardsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getCardsByUser.fulfilled]: (state, action) => {
      state.loading = false;

      state.userCards = action.payload;
    },
    [getCardsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default WordSlice.reducer;
