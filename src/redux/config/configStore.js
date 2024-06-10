import { configureStore } from "@reduxjs/toolkit";
import datasSlice from "../slices/datasSlice";

const store = configureStore({
  reducer: {
    datas: datasSlice
  }
})

export default store;