import React from 'react';
// import AllProductsList from 'components/productsList/allProductsList/AllProductsList';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';

function Diary() {
  return (
    <div className="background Calc-DairyBackground">
      <DiaryCalendar />
      <DiaryAddProductForm />
      {/* <AllProductsList /> */}
    </div>
  )
}

export default Diary