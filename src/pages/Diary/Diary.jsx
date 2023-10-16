import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import { Paper } from '@mui/material';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import DiaryList from '../../components/DiaryList/DiaryList';
import { useUser } from 'hooks/useUser';
import { SummaryContainer } from 'components/RightSideBar/SummaryContainer';
import DiaryAddButton from 'components/DiaryAddButton/DiaryAddButton';
import { setDiaryBackBtn } from 'redux/user/userSlice';
import useViewPort from 'hooks/useViewport';
import s from '../../components/RightSideBar/rightSideBar.module.css';
import { selectThemeMode } from 'redux/theme/themeSelectors';
import Modal from 'components/Modal/Modal';

function Diary() {
  const dispatch = useDispatch();
  const { diaryBackBtn, calculator } =
    useUser();
  const { width } = useViewPort();
  const [calendarDisplay, setCalendarDisplay] = useState('');
  const [formDisplay, setFormDisplay] = useState('');
  const [onMount, setOnMount] = useState(true);
  const themeMode = useSelector(selectThemeMode);
  const [modalState, setModalState] = useState({
    open: false,
    source: 'diary',
  });

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

  function handleModalOpen() {
    if (!calculator.startDate) {
      setModalState(prev => {
        return {
          ...prev,
          open: true,
        };
      });
    } else {
      setOnMount(false);
    }
  }
  useEffect(() => {
    handleModalOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="background Calc-DairyBackground"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      { onMount ? (
        <Loader />
      ) : (
        <>
          <section className="top-bottom">
            <Container className="left-right">
              {width > 767 ? (
                <>
                  <div>
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
              <Paper
                className={`${s.sidebarBox} ${
                  themeMode === 'dark' ? s.darkMode : s.lightMode
                }`}
              />
              <RightSideBar>
                <SummaryContainer />
              </RightSideBar>
            </Container>
          </section>
          <Modal modalState={modalState} />
        </>
      )}
    </div>
  );
}

export default Diary;
