import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productReducer from '../features/productSlice'
import variablesReducer from '../features/variableSlice'
import {persistStore} from "redux-persist"


const reducers = combineReducers({
  product: productReducer,
  variables: variablesReducer,      
 });
 
 const persistConfig = {
     key: "root",
     version: 1,
     storage,
 };
 
const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducer,
});

export let persistor = persistStore(store);