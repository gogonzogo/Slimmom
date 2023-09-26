import { useEffect } from 'react';
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
import { setDiaryBackBtn } from 'redux/diary/diarySlice';
import useViewPort from 'hooks/useViewport';
import css from './Diary.module.css'

function Diary() {
  const dispatch = useDispatch();
  const { diaryBackBtn } = useDiary();
  const { width } = useViewPort();

  useEffect(() => {
    const today = dayjs().format('MM-DD-YYYY');
    dispatch(fetchDiary(today));
  }, [dispatch]);

  function handleClick() {
    dispatch(setDiaryBackBtn(!diaryBackBtn));
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
          {width > 768 ? (
            <>
              <div className={css.tabletDeskContainer}>
                <DiaryCalendar />
                <DiaryAddProductForm />
                <DiaryList />
              </div>
            </>
          ) : diaryBackBtn ? (
            <DiaryAddProductForm diaryBackBtn={diaryBackBtn} />
          ) : (
            <>
              <DiaryCalendar />
              <DiaryList />
              <DiaryAddButton onClick={handleClick} />
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
