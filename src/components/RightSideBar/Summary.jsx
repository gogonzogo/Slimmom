import { Input, useMediaQuery } from '@mui/material';
import ListWithScroll from 'components/Modal/ListWithScroll';
import s from './rightSideBar.module.css';
import CustomButton from 'components/CustomButton/CustomButton';
import { useDispatch } from 'react-redux';
import { getGraphData } from '../../redux/user/userOperations';
import { useState } from 'react';
import GraphModal from 'components/Modal/GraphModal';


const Summary = ({ date, summary, searchInputChange, searchResults }) => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState({
    open: false,
    data: null,
  });

  const showGraph = async () => {
    const grpthDates = {
      todayDate: new Date(),
    }
    const result = await dispatch(getGraphData(grpthDates));
    setModalState(prev => {
      return {
        ...prev,
        open: true,
        data: result
      };
    });
  };

  const handleModalClose = () => {
    setModalState(prev => {
      return {
        ...prev,
        open: false,
      };
    });
    setTimeout(() => {
      // fixing effect, when during closing modal you see 0 kcal recommended daily calorie intake
      setModalState({ open: false, dailyRate: null, foodNotToEat: [] });
    }, 250);
  };


  const isLargeScreen = useMediaQuery('(min-width: 769px)');
  return (
    <div className={s.sideBarContentWrapper}>
      <div className={s.sideBarContent}>
        <CustomButton
          color="orange"
          size="graph"
          onClick={showGraph}
        >
          graphs
        </CustomButton>
        <p className={s.sideBarTitle}>

          Summary for {date.replaceAll('-', '/')}
        </p>
        <ul className={s.statsBox}>
          <li className={s.statsBoxItem}>
            <p>Left</p>
            <p>{summary.left.toFixed(1)}</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>Consumed</p>
            <p>{summary.totalConsumed.toFixed(1)}</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>Daily rate</p>
            <p>{summary.dailyRate.toFixed(1)}</p>
          </li>
          <li className={s.statsBoxItem}>
            <p>n% of normal</p>
            <p>{summary.percentage}%</p>
          </li>
        </ul>
      </div>
      <div className={s.sideBarContent}>
        <p className={s.sideBarTitle}>Food not recommended</p>
        <div>
          <Input placeholder="type here.." onChange={searchInputChange} />
          {searchResults.length > 0 &&
            <ListWithScroll
              array={searchResults}
              style={{ height: isLargeScreen ? 400 : 150 }}
            />
          }
        </div>
      </div>

      {modalState.data &&
        <GraphModal handleModalClose={handleModalClose} modalState={modalState} />
      }
    </div>
  );
};
Summary.defaultProps = {
  date: 'DATE',
  summary: {
    left: 0,
    totalConsumed: 0,
    dailyRate: 0,
    percentage: 0,
  },
};
export default Summary;
