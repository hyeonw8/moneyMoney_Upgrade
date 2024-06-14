import { createSlice } from "@reduxjs/toolkit"

const getSelectedMonth = () => {
  return JSON.parse(localStorage.getItem('month')) || []
}

const initialState = {
  selectedMonth: getSelectedMonth(),
}

const datasSlice = createSlice({
  name: 'datas',
  initialState,
  reducers: {
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
  }
})

export const { setSelectedMonth } = datasSlice.actions;
export default datasSlice.reducer;