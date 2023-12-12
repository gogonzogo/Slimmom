import s from './rightSideBar.module.css';
import CustomButton from 'components/CustomButton/CustomButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGraphData } from '../../redux/user/userOperations';
import GraphModal from 'components/Modal/GraphModal';


export const Stats = ({ calculator, progressData }) => {
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
  return (
    <div>

      {calculator.startDate ? (
        <div className={s.sideBarContentWrapper}>
          <div className={s.sideBarContent}>
            <CustomButton
              color="orange"
              size="graph"
              onClick={showGraph}
            >
              graphs
            </CustomButton>
            <p className={s.sideBarTitle}>Your stats</p>
            <ul className={s.statsBox}>
              <li className={s.statsBoxItem}>
                <p>Height</p>
                <p>
                  {calculator.height
                    ? `${calculator.height} cm`
                    : calculator.heightFeet
                      ? `${calculator.heightFeet} ft ${calculator.heightInch} in`
                      : 'Height data not available'}
                </p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Age</p>
                <p>{calculator.age} years young</p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Current Weight</p>
                <p>
                  {calculator.currentWeight
                    ? `${calculator.currentWeight} kg`
                    : calculator.currentWeightLbs
                      ? `${calculator.currentWeightLbs} lbs`
                      : 'Current weight data not available'}
                </p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Desired Weight</p>
                <p>
                  {calculator.desiredWeight
                    ? `${calculator.desiredWeight} kg`
                    : calculator.desiredWeightLbs
                      ? `${calculator.desiredWeightLbs} lbs`
                      : 'Desired weight data not available'}
                </p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Blood Type</p>
                <p>{calculator.bloodType}</p>
              </li>
            </ul>
          </div>
          <div className={s.sideBarContent}>
            <p className={s.sideBarTitle}>Your progress</p>
            <ul className={s.statsBox}>
              <li className={s.statsBoxItem}>
                <p>Started Date</p>
                <p>{progressData.originalDate}</p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Starting Weight</p>
                <p>
                  {calculator.unitOfMeasure === 'M'
                    ? `${calculator.originalWeight} kg`
                    : calculator.unitOfMeasure === 'S'
                      ? `${calculator.originalWeight} lbs`
                      : 'Starting weight data not available'}
                </p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Weight Lost</p>
                {calculator.unitOfMeasure === 'M'
                  ? `${progressData.lost.toFixed(2)} kg`
                  : calculator.unitOfMeasure === 'S'
                    ? `${progressData.lost.toFixed(2)} lbs`
                    : 'Lost weight data not available'}
              </li>
              <li className={s.statsBoxItem}>
                <p>Days Tracking</p>
                <p>{progressData.inDays} days</p>
              </li>
            </ul>
            {progressData.reachedGoal && (
              <p className={s.sideBarTitle}>You reached your goal!</p>
            )}
          </div>
        </div>
      ) : (
        <div className={s.sideBarContentWrapper}>
          <div className={s.sideBarContent}>
            <p className={s.sideBarTitle}>
              Please complete the stats to begin tracking your journey
            </p>
          </div>
        </div>
      )}
      {modalState.data &&
        <GraphModal handleModalClose={handleModalClose} modalState={modalState} />
      }
    </div>
  );
};
