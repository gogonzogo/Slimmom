import DiaryListItem from '../DiaryListItem/DiaryListItem';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import { deleteDiaryEntry } from '../../redux/diary/diaryOperations';
import List from '@mui/material/List';
import { useDiary } from 'hooks/useDiary';
import { useEffect } from 'react';

function DiaryList() {
  const dispatch = useDispatch();
  const { calDate, diaryList } = useDiary();

  useEffect(() => {
    console.log(diaryList);
  }, [diaryList]);

  function handleDelete(entryId) {
    dispatch(deleteDiaryEntry({ calDate, entryId }));
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
