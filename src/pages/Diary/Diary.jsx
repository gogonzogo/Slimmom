import React, { useEffect, useState } from 'react';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryList from '../../components/DiaryList/DiaryList';
import { useDiary } from 'hooks/useDiary';
import Container from 'components/Container/Container';
import { SummaryContainer } from 'components/RightSideBar/SummaryContainer';
import { fetchDiary } from 'redux/diary/diaryOperations';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import DiaryAddButton from 'components/DiaryAddButton/DiaryAddButton';
import DiaryBackButton from 'components/DiaryBackButton/DiaryBackButton';

function Diary() {
  const dispatch = useDispatch();
  const { diaryList, calDate } = useDiary();
  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    const today = dayjs().format('MM-DD-YYYY');
    dispatch(fetchDiary(today));
  }, [dispatch]);

  function handleClick(e) {
    console.log(diaryList);
    console.log(calDate);
    setOpenForm(!openForm);
  }

  return (
    <div
      className="background Calc-DairyBackground"
      style={{
        display: 'flex',
        flexDirection: 'column',

      }}
    >
      <section className="top-bottom" style={{ flexGrow: '1' }}>
        <Container className="left-right">
          {openForm ? (
            <>
              <DiaryBackButton onClick={e => handleClick(e)} />
              <DiaryAddProductForm />
            </>
          ) : (
            <>
              <DiaryCalendar />
              <DiaryList diaryList={diaryList} />
              <DiaryAddButton onClick={e => handleClick(e)} />
            </>
          )}
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
};

export default Diary;
