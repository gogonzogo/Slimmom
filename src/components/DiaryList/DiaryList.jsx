import DiaryListItem from '../DiaryListItem/DiaryListItem';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import {
  // fetchDiary,
  deleteDiaryEntry,
} from '../../redux/diary/diaryOperations';
// import { useEffect } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import { useDiary } from 'hooks/useDiary';
// import dayjs from 'dayjs';
// import { setCalDate } from 'redux/diary/diarySlice';

function DiaryList({ diaryList }) {
  console.log(diaryList);
  // const { diaryList, calDate } = useDiary();
  const dispatch = useDispatch();
  const { calDate } = useDiary();
  // let date = calDate || dayjs().format(`MM/DD/YYYY`);

  // useEffect(() => {
  //   dispatch(fetchDiary(date));
  // }, [dispatch, date]);

  function handleDelete(entryId) {
    console.log(entryId);
    dispatch(deleteDiaryEntry({ calDate, entryId }));
  }

  return (
    <List className={style.productList}>
      {diaryList.length < 1 ? (
        <p>No Diary Entries for selected day</p>
      ) : (
        diaryList.map(item => (
          <DiaryListItem
            key={item._id}
            product={item}
            handleDelete={handleDelete}
          />
        ))
      )}
    </List>
  );
}

export default DiaryList;
