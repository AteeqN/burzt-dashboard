import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/token/tokenSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
