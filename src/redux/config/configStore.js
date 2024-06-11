import { configureStore } from "@reduxjs/toolkit";
import datasSlice from "../slices/datasSlice";
import authSlice from "../slices/authSlice";

const store = configureStore({
  reducer: {
    datas: datasSlice,
    auth: authSlice,
  }
})

export default store;