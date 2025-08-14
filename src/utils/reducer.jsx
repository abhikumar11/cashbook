import { createSlice } from "@reduxjs/toolkit";

const cashSlice=createSlice({
    name:"cashbook",
    initialState:{cashbook:[]},
    reducers:{
        addItem:(state,action)=>{
            state.cashbook.push(action.payload);
        }
    }
});
export const {addItem}=cashSlice.actions;
export const cashbook=cashSlice.reducer;