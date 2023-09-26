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

function Diary() {
  const dispatch = useDispatch();
  const { diaryList, diaryBackBtn } = useDiary();

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
          {diaryBackBtn ? (
            <>
              <DiaryAddProductForm diaryBackBtn={diaryBackBtn} />
            </>
          ) : (
            <>
              <DiaryCalendar />
              <DiaryList diaryList={diaryList} />
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
