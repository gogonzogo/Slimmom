// import { useDiary } from 'hooks/useDiary';
// // import { useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUserId } from 'redux/auth/authSelectors';
// // import { fetchDaySummary } from 'redux/Calc/calcOperations';
// import { getCalDate } from 'redux/diary/diarySelectors';

import Summary from './Summary';

export const SummaryContainer = () => {
  // const dispatch = useDispatch();
  // const date = useSelector(getCalDate);
  // const userId = useSelector(selectUserId);
  // const { diaryList } = useDiary();

  // useMemo(() => {
  //   date && dispatch(fetchDaySummary({ date, userId }));
  //   console.log(diaryList);
  // }, [dispatch, date, diaryList, userId]);
  return <Summary />;
};
