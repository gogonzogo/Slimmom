import { useEffect, useState } from 'react';
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
import css from './Diary.module.css';
import s from '../../components/RightSideBar/rightSideBar.module.css';
import Loader from 'components/Loader/Loader';

function Diary() {
  const dispatch = useDispatch();
  const { diaryBackBtn } = useDiary();
  const { width } = useViewPort();
  const [calendarDisplay, setCalendarDisplay] = useState('');
  const [formDisplay, setFormDisplay] = useState('');
  const [onMount, setOnMount] = useState(true);

  useEffect(() => {
    const today = dayjs().format('MM-DD-YYYY');
    dispatch(fetchDiary(today));
    setOnMount(false);
  }, [dispatch]);

  function handleClick() {
    dispatch(setDiaryBackBtn(!diaryBackBtn));
  }

  useEffect(() => {
    if (diaryBackBtn === false) {
      setCalendarDisplay('block');
      setFormDisplay('none');
    } else {
      setCalendarDisplay('none');
      setFormDisplay('block');
    }
  }, [diaryBackBtn]);

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
          {onMount ? (
            <Loader />
          ) : width > 768 ? (
            <>
              <div className={css.tabletDeskContainer}>
                <DiaryCalendar />
                <DiaryAddProductForm />
                <DiaryList />
              </div>
            </>
          ) : (
            <>
              <div style={{ display: `${formDisplay}` }}>
                <DiaryAddProductForm diaryBackBtn={diaryBackBtn} />
              </div>
              <div style={{ display: `${calendarDisplay}` }}>
                <DiaryCalendar />
                <DiaryList />
                <DiaryAddButton onClick={handleClick} />
              </div>
            </>
          )}
        </Container>
      </section>
      <section className="no-bottom">
        <Container className="no-left-right">
          <div className={s.sidebarbox}></div>
          <RightSideBar>
            <SummaryContainer />
          </RightSideBar>
        </Container>
      </section>
    </div>
  );
}

export default Diary;
