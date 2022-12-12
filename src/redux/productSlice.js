import { createSlice } from '@reduxjs/toolkit'
import Data from '../Library/stock'





export const productSlice = createSlice({
  name: 'product',
  initialState: {
    prod: [],
  },
  
  reducers: {
    add: (state, action) => {
      const itemInCart = state.prod.find((item) => item.id === action.payload.id);
      if (!itemInCart) {
        state.prod.push({ ...action.payload, quantity: 1,added: true});
      } 
    },
    remove: (state, action) => {  
      state.prod= state.prod.filter((el) => el.id != action.payload);
    },
     incrementProduct: (state, action) => {
      const itemInCart = state.prod.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } 
    },
    decrementProduct: (state, action) => {
       const itemInCart = state.prod.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity--;
      } 
    },
  },
})



   
export const {add,remove,emptyCart,incrementProduct,decrementProduct,} = productSlice.actions;

export const SelectProduct = state => state.product.prod;

export default productSlice.reducer;