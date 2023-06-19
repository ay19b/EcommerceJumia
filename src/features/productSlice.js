import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name: 'product',
  initialState:[],
  
  reducers: {
    add: (state, action) => {
      const itemInCart = state.find((item) => item._id === action.payload._id);
      if (!itemInCart) {
        state.push({ ...action.payload, quantity: 1,added: true});
      } 
    },
    remove: (state, action) => {  
      state.splice(state.findIndex((item) => item._id === action.payload._id),1)
    },
     incrementProduct: (state, action) => {
      const itemInCart = state.find((item) => item._id === action.payload._id);
      if (itemInCart) {
        itemInCart.quantity++;
      } 
    },
    decrementProduct: (state, action) => {
       const itemInCart = state.find((item) => item._id === action.payload._id);
      if (itemInCart) {
        itemInCart.quantity--;
      } 
    },
    saveProductVisit:(state,action) => {
      const itemInCart = state.find((item) => item._id === action.payload._id);
      if (!itemInCart) {
        state.push({ ...action.payload, quantity: 1,added: true});
      } 
    }
  },
})
   
export const {add,remove,incrementProduct,decrementProduct} = productSlice.actions;

export const SelectProduct = state => state.product;

export default productSlice.reducer;