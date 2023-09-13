import React from 'react';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';




function Diary() {
  return (
    <div className="background Calc-DairyBackground">
      <DiaryCalendar />
      <DiaryAddProductForm />
      
    </div>
  )
}

export default Diary