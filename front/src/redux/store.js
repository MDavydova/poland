import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import CardReducer from "./features/cardSlice";
import WordReducer from "./features/wordSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    card: CardReducer,
    word: WordReducer,
  },
});
