import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import productReducer from '../features/productSlice'
import variablesReducer from '../features/variableSlice'



const reducers = combineReducers({
  product: productReducer,
  variables: variablesReducer        
 });
 
 const persistConfig = {
     key: 'root',
     storage
 };
 
 const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})
