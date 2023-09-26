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
    dispatch(deleteDiaryEntry({ calDate, entryId }));
    console.log(diaryList);
  }

  return (
    <List className={style.productList}>
      {diaryList.map((item, index) => (
        <DiaryListItem
          key={`${item._id}-${index}`}
          product={item}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
}

export default DiaryList;
