import React from 'react';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';

import RightSideBar from 'components/RightSideBar/RightSideBar';

function Diary() {
  return (
    <div
      className="background Calc-DairyBackground"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ flexGrow: '1' }}>
        <DiaryCalendar />
        <DiaryAddProductForm />
      </div>
      <RightSideBar />
    </div>
  );
}

export default Diary;
