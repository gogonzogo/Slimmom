import React from 'react';
import AllProductsList from 'components/ProductsList/AllProductsList/AllProductsList';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';

function Diary() {
  return (
    <div className="background Calc-DairyBackground">
      <DiaryCalendar />
      <DiaryAddProductForm />
      <AllProductsList />
    </div>
  )
}

export default Diary