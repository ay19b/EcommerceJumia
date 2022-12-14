import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name: 'product',
  initialState:[],
  
  reducers: {
    add: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (!itemInCart) {
        state.push({ ...action.payload, quantity: 1,added: true});
      } 
    },
    remove: (state, action) => {  
      state.splice(state.findIndex((item) => item.id === action.payload.id),1)
    },
     incrementProduct: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } 
    },
    decrementProduct: (state, action) => {
       const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity--;
      } 
    },
  },
})



   
export const {add,remove,emptyCart,incrementProduct,decrementProduct,} = productSlice.actions;

export const SelectProduct = state => state.product;

export default productSlice.reducer;
