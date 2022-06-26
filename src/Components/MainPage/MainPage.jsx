import React from 'react'

//Components
import DataGridContainer from './DataGrid';
import ColumnList from './ColumnList';


export default function MainPage() {
   return (
      <div style={{
         display: 'flex',
         height: '910px',
         marginTop: '31px',
      }}>
         <DataGridContainer />
         <ColumnList />
      </div>
   )
}
