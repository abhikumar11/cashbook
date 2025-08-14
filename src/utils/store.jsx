import { configureStore } from "@reduxjs/toolkit";
import { cashbook } from "./reducer";

const store=configureStore({
    reducer:{cashbook:cashbook}
})
export default store;