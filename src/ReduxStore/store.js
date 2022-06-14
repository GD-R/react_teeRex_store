import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductsSlice";
import cartReducer from "../features/cartSlice";


const store = configureStore({
    reducer: {
      products: productReducer,
      cart: cartReducer
    }
})

export default store