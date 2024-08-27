import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slice/CartSlice.js";
import CartReducer from "./slice/CartSlice.js"


export const store = configureStore({
    reducer:{
        cart: CartReducer
    }
});

export default store;