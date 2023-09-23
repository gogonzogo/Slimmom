import DiaryListItem from '../DiaryListItem/DiaryListItem';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import { deleteDiaryEntry } from '../../redux/diary/diaryOperations';
import * as React from 'react';
import List from '@mui/material/List';
import { useDiary } from 'hooks/useDiary';

function DiaryList({ diaryList }) {
  const dispatch = useDispatch();
  const { calDate } = useDiary();

  function handleDelete(entryId) {
    console.log(entryId);
    dispatch(deleteDiaryEntry({ calDate, entryId }));
  }

  return (
    <List className={style.productList}>
      {diaryList.map(item => (
        <DiaryListItem
          key={item._id}
          product={item}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
}

export default DiaryList;
