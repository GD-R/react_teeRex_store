import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})

const initialValue = {
   data: [],
   copyData: [],
   status: STATUS.LOADING,
   filterMatch: true
}

const productsSlice = createSlice({
    name: "products",
    initialState: { value: initialValue },
    reducers: {
        filterSearch: (state,action) => {
            state.value.data = state.value.copyData.filter((product) => {
                const name = product.name.toLowerCase();
                const type = product.type.toLowerCase();
                const color = product.color.toLowerCase();
                const search = action.payload.toLowerCase();
                if(name.includes(search) || type.includes(search) || color.includes(search)) {
                  return true
                }
            })
        },

        applyFilter: (state,action) => {
            const filterKeys = Object.keys(action.payload);
        const noPriceFilter = state.value.copyData.filter((product) => {
            return filterKeys.every((key) => {
                if(key === "price") return true
                if(action.payload[key].includes(product[key])) {
                    return true
                }
                })
         })
         if(action.payload.hasOwnProperty('price')) {
            const filterPrice = noPriceFilter.filter((product) => {
                let flag = false
                action.payload.price.forEach((item) => {
                     if(product.price >= item[0] && product.price <= item[1])
                      flag =  true
                 })
                 return flag;
              })
              state.value.data = filterPrice
         }
         else {
            state.value.data = noPriceFilter
         }
         if(state.value.data.length === 0) {
           
            state.value.filterMatch = false
         }
        
        }

    },
    extraReducers: (builder) => {
         builder
         .addCase(fetchProducts.pending, (state,action) => {
              state.value.status = STATUS.LOADING;
         })

         .addCase(fetchProducts.fulfilled, (state,action) => {
             state.value.data = action.payload;
             state.value.status = STATUS.IDLE;
             state.value.copyData = action.payload;
         })

         .addCase(fetchProducts.rejected, (state,action) => {
            state.value.status = STATUS.ERROR
         })
    }
})

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
      const response = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
      const data = await response.json();
      return data;
})

export const {filterSearch, applyFilter} = productsSlice.actions;
export default productsSlice.reducer;