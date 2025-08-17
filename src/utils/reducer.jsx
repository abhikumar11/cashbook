import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
     name: "cashbook",
     initialState: { expenseList: [] },
     reducers: {
          addItem: (state, action) => {
               state.expenseList.push(action.payload);
          },
          deleteItem: (state, action) => {
               const temp = state.expenseList.filter(
                    (p) => p.id !== action.payload
               );
               state.expenseList = [...temp];
          },
     },
});
export const { addItem, deleteItem } = cashSlice.actions;
export const cashbook = cashSlice.reducer;
