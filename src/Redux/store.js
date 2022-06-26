import { configureStore, combineReducers } from "@reduxjs/toolkit";
import DataGrid from './reducer/DataGrid-reducer';

const rootReducer = combineReducers({
   DataGrid,
})

export const SetupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}
