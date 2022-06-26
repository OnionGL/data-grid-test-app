//Redux-Toolkit
import { createSlice } from "@reduxjs/toolkit";

//Data from file data.js
import services from '../../data'

const serverData = services.getEmployees() // Массив объектов из data.js

const initialState = {
   data: serverData,
}

export const DataGrid = createSlice({
   name: 'data-grid',
   initialState,
   reducers: {
      deleteColumn(state, action) {
         for (let i = 0; i < state.data.length; i++) {
            let item = state.data[i]
            let deleteItem = action.payload.replace(/\s/g, '')
            delete item[deleteItem]
         }
      },
      addColumn(state, action) {
         for (let i = 0; i < state.data.length; i++) {
            let item = state.data[i]
            item[action.payload] = ''
         }
      },
      changeTitleInData(state, action) {
         for (let i = 0; i < state.data.length; i++) {
            let item = state.data[i]
            let newTitle = action.payload.newTitle
            let oldTitle = action.payload.oldTitle
            item[newTitle] = item[oldTitle]
            delete item[oldTitle];
         }
      }
   },

})

export default DataGrid.reducer;

