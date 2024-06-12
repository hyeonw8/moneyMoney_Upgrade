import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  accessToken: localStorage.getItem("accessToken") || null,
  userData : null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    }
  }
})

export const { login, logout, setUserData } = authSlice.actions;
export default authSlice.reducer;