import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { value: initialValue },
    reducers: {
        addToCart: (state,action) => {
           state.value.cart.push(action.payload);
        },

        increaseQty: (state,action) => {
            state.value.cart = state.value.cart.map((product) => {
                return(product.id === action.payload.id? {...product, qty: product.qty + 1} : 
                    {...product})
            })
        },

        decreaseQty: (state,action) => {
            state.value.cart = state.value.cart.map((product) => {
                return(product.id === action.payload.id? {...product, qty: product.qty - 1} : 
                    {...product})
            })
        },

        removeProduct: (state,action) => {
           state.value.cart = state.value.cart.filter((product) => product.id !== action.payload)
        },

        emptyCart: (state) => {
            state.value.cart = []
        }

    }
})

export const {addToCart, increaseQty, decreaseQty, removeProduct, emptyCart} = cartSlice.actions;
export default cartSlice.reducer