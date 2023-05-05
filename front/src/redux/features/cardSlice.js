import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const generateNounWord = createAsyncThunk(
  "card/generateNounWord",
  async (length, { rejectWithValue }) => {
    try {
      const response = await api.generateNounWord(length);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const createCard = createAsyncThunk(
  "card/createCard",
  async (cardData, { rejectWithValue }) => {
    try {
      const response = await api.createCard(cardData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCardsByUser = createAsyncThunk(
  "card/getCardsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getCardsByUser(userId);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "card/deleteCard",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteCard(id);

      toast.success("Card Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateCard = createAsyncThunk(
  "card/updateCard",
  async ({ id, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateCard(id);
      toast.success("Card Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState: {
    card: {},
    userCards: [],
    error: "",
    loading: false,
  }, //allows you to respond to an action in your slice reducer but does not create an action creator function.
  extraReducers: {
    [createCard.pending]: (state, action) => {
      state.pending = true;
    },
    [createCard.fulfilled]: (state, action) => {
      state.loading = false;
      state.cards = [action.payload];
    },
    [createCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
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
    [deleteCard.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteCard.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userCards = state.userCards.filter((item) => item._id !== id);
      }
    },
    [deleteCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateCard.pending]: (state, action) => {
      state.loading = true;
    },
    [updateCard.fullfiled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userCards = state.userCards.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateCard.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default cardSlice.reducer;
