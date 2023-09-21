import React from 'react';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import { Summery } from 'components/RightSideBar/Summery';
import DiaryList from '../../components/DiaryList/DiaryList';
import { useDiary } from 'hooks/useDiary';

function Diary() {
  const { diaryList } = useDiary();

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
        <DiaryList diaryList={diaryList} />
      </div>
      <RightSideBar>
        <Summery />
      </RightSideBar>
    </div>
  );
}

export default Diary;
