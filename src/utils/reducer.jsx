import { createSlice } from "@reduxjs/toolkit";

const cashSlice=createSlice({
    name:"cashbook",
    initialState:{expenseList:[]},
    reducers:{
        addItem:(state,action)=>{
            state.expenseList.push(action.payload);
        }
    }
});
export const {addItem}=cashSlice.actions;
export const cashbook=cashSlice.reducer;