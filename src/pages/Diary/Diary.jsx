import React from 'react';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryList from '../../components/DiaryList/DiaryList';
import { useDiary } from 'hooks/useDiary';
import Container from 'components/Container/Container';
import { SummaryContainer } from 'components/RightSideBar/SummaryContainer';

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
      <section className="top-bottom" style={{ flexGrow: '1' }}>
        <Container className="left-right">
          <DiaryCalendar />
          <DiaryAddProductForm />
          <DiaryList diaryList={diaryList} />
        </Container>
      </section>
      <section className="no-bottom">
        <Container className="no-left-right">
          <RightSideBar>
            <SummaryContainer />
          </RightSideBar>
        </Container>
      </section>
    </div>
  );
}

export default Diary;
