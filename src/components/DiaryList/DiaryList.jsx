import DiaryListItem from '../DiaryListItem/DiaryListItem';
import style from './style.module.css';
// import { useDispatch } from 'react-redux';
// import {
//   fetchDiary,
//   deleteDiaryEntry,
// } from '../../redux/diary/diaryOperations';
// import { useEffect } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
// import dayjs from 'dayjs';
// import { setCalDate } from 'redux/diary/diarySlice';
import { useDiary } from '../../hooks/useDiary';




function DiaryList() {
  
  const { diaryList } = useDiary();
  console.log(diaryList)
  // const dispatch = useDispatch();
  // let date = calDate || dayjs().format(`MM/DD/YYYY`);

  // useEffect(() => {
  //   dispatch(fetchDiary(date));
  // }, [dispatch, date]);

  // function handleDelete(productId) {
  //   dispatch(deleteDiaryEntry(productId));
  // }

  return (
    <List className={style.productList}>
      {diaryList.length < 1 ? <p>No Diary Entries for selected day</p>
        : 
        diaryList.map(item => (
          <DiaryListItem
            key={item.productId}
            product={item}
            // handleDelete={handleDelete}
          />
        ))}
    </List>
  );
}

export default DiaryList;
