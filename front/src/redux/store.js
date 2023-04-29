import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import CardReducer from "./features/cardSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    card: CardReducer,
  },
});
