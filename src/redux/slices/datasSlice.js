import { createSlice } from "@reduxjs/toolkit"
import moneyData from '/src/moneyData.json';

const getSelectedMonth = () => {
  return JSON.parse(localStorage.getItem('month')) || []
}

const initialState = {
  data: moneyData,
  selectedMonth: getSelectedMonth(),
}

const datasSlice = createSlice({
  name: 'datas',
  initialState,
  reducers: {
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    deleteData: (state, action) => {
      const id = action.payload;
      const idx = state.data.findIndex(item => item.id === id);

      if (idx !== -1) {
        state.data.splice(idx, 1); // mutabble way
      }
    },
    updateData: (state, action) => {
      const { id, updatedItem } = action.payload;
      const idx = state.data.findIndex(item => item.id === id);

      if( idx !== -1 ) {
        state.data[idx] = updatedItem; // mutabble way
      }
    }
  }
})

export const { setSelectedMonth, addData, deleteData, updateData } = datasSlice.actions;
export default datasSlice.reducer;