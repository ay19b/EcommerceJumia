import { createSlice } from '@reduxjs/toolkit'
import Data from '../Library/stock'

export const productSlice = createSlice({
  name: 'product',
  initialState: Data,
  
  
  reducers: {
    
    add: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          added: true,
          quantity: item.quantity + 1,
        };
      });
    },
    remove: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          added: false,
          quantity: item.quantity * 0,
        };
      });
    },
    emptyCart: (state, action) => {
      return state.map((item) => {
        return {
          ...item,
          added: false,
          quantity: item.quantity * 0,
        };
      });
    },
    incrementProduct: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });
    },
    decrementProduct: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      });
    },
  },
})



   
export const {add,remove,emptyCart,incrementProduct,decrementProduct,} = productSlice.actions;

export const SelectProduct = state => state.product;

export default productSlice.reducer;