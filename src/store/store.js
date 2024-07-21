import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

let store=configureStore({
    reducer: {
        allCart:cartSlice
    }, // Define your reducers here
});


export default store;