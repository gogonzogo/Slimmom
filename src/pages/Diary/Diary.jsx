import React, { useEffect } from 'react';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryList from '../../components/DiaryList/DiaryList';
import { useDiary } from 'hooks/useDiary';
import Container from 'components/Container/Container';
import { SummaryContainer } from 'components/RightSideBar/SummaryContainer';
import { useAuth } from 'hooks/useAuth';
import { fetchDiary } from 'redux/diary/diaryOperations';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import DiaryAddButton from '../../components/Button/DiaryAddButton';

function Diary() {
  const dispatch = useDispatch();
  const { diaryList } = useDiary();
  const { refreshing } = useAuth();

  useEffect(() => {
    const today = dayjs().format('MM-DD-YYYY');
    dispatch(fetchDiary(today));
  }, [dispatch]);

  function handleClick(e) {
    console.log(e);
    console.log(diaryList);
  }

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
          {diaryList.length < 1 && !refreshing && <DiaryAddProductForm />}
          {diaryList.length > 0 && !refreshing && (
            <>
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
}

export default Diary;
