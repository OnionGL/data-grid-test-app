import React from 'react'

//React-Redux
import { useSelector } from 'react-redux';

// DataGrid
import DataGrid, { Column } from 'devextreme-react/data-grid';

//Styles
import styles from './DataGrid.module.css';

export default function DataGridContainer() {
   const { data } = useSelector(state => state.DataGrid) // Массив объектов таблицы
   return (
      <div className={styles.dataGrid}>
         <div className={styles.dataGrid__main}>
            Окно предварительного просмотра отчёта
         </div>

         {Object.keys(data[0]).length !== 1 ?
            <DataGrid
               style={{
                  margin: '28px 8px 0 17px',
               }}
               id="gridContainer"
               dataSource={data}
               allowColumnReordering={true}
               allowColumnResizing={true}
               columnAutoWidth={true}
               showBorders={true}
            >
               {Object.keys(data[0]).map((obj) =>
                  <>
                     {!data[obj] ? null :
                        <Column
                           key={obj}
                           dataField={obj}
                        />
                     }
                  </>
               )}
            </DataGrid>
            :
            <div style={{
               marginLeft: '50%',
               marginTop: '30%',
            }}>
               Данных Нет!
            </div>
         }
      </div>

   )
}
