import React from 'react'

// Icon
import iconDelete from '../../icon/Delete.png'
import Edit from '../../icon/Edit.png'

//React-Redux
import { useDispatch, useSelector } from 'react-redux'

//Components
import { DataGrid } from '../../Redux/reducer/DataGrid-reducer';

//Styles
import styles from './ColumnList.module.css';




export default function ColumnList() {
   const dispatch = useDispatch()
   const { deleteColumn, changeTitleInData, addColumn } = DataGrid.actions; // Функции из Redux
   const { data } = useSelector(state => state.DataGrid) // Массив объектов таблицы

   //Удаление колонки
   const deleteTable = (id) => {
      dispatch(deleteColumn(id))
   }

   // Добавление новой колонки
   const addNewColumn = () => {
      dispatch(addColumn('NewColumn'))
   }

   // Функция смены title
   const changeTitle = (oldTitle, id, index) => {
      let element = document.getElementById(id);
      let buttonDelete = document.getElementById(index); // Кнопка удаления title
      let buttonChange = document.getElementById(`button${index}`); // Кнопка изменения title
      buttonDelete.hidden = true
      buttonChange.hidden = true
      let input = document.createElement('input');
      input.setAttribute('value', oldTitle);
      input.setAttribute('id', id);
      const handleSubmit = (e) => e.keyCode === 13 ? submitChange(id, document.getElementById(id).value) : null;
      input.onkeydown = (e) => handleSubmit(e);
      element.parentNode.replaceChild(input, element) // смена div на title
      // Функция отправки данных с инпута и смены title
      function submitChange(id, newTitle) {
         let newElement = document.createElement('div');
         let input = document.getElementById(id);
         newElement.setAttribute('id', id);
         newElement.innerHTML = newTitle;
         newElement.className = styles.column__item;
         dispatch(changeTitleInData({ oldTitle, newTitle }))
         input.parentNode.replaceChild(newElement, input)
         buttonDelete.hidden = false
         buttonChange.hidden = false
      }
   }


   return (
      <div className={styles.columnList}>
         <div className={styles.columnList__text}>
            Список колонок
         </div>
         {Object.keys(data[0]).map((obj, index) =>
            <>
               {obj !== 'ID' ?
                  <div key={obj} className={styles.columnList__container}>
                     <div
                        id={obj}
                        className={styles.columnList__container_item}>
                        {obj}
                     </div>
                     <button id={index} onClick={() => deleteTable(document.getElementById(obj).id, index)} className={styles.button__delete}>
                        <img style={{ marginRight: '6px', cursor: 'pointer' }} src={iconDelete} alt="Delete" />
                     </button>
                     <button id={`button${index}`} onClick={() => changeTitle(document.getElementById(obj).innerHTML, obj, index)} className={styles.button__change}>
                        <img style={{ cursor: 'pointer' }} src={Edit} alt="Edit" />
                     </button>
                  </div>
                  : null}
            </>
         )}
         <button onClick={() => {
            addNewColumn()
         }} className={styles.columnList__addButton}>
            Добавить колонку
         </button>
      </div >
   )
}
