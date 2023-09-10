import React from 'react';
import AllProductsList from 'components/productsList/allProductsList/AllProductsList';
import DiaryAddProduct from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';
function Diary() {
  return (
    <div>Diary
      <DiaryCalendar />
      <DiaryAddProduct />
      <AllProductsList />
    </div>
  )
}

export default Diary