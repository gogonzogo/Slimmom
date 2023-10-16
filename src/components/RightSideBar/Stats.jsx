import s from './rightSideBar.module.css';

export const Stats = ({ calculator, progressData }) => {
  console.log(`calculator`, calculator);
  return (
    <div>
      {calculator.startDate ? (
        <div className={s.sideBarContentWrapper}>
          <div className={s.sideBarContent}>
            <p className={s.sideBarTitle}>Your stats</p>
            <ul className={s.statsBox}>
              <li className={s.statsBoxItem}>
                <p>Height</p>
                <p>
                  {calculator.height
                    ? `${calculator.height} cm`
                    : calculator.heightFeet && calculator.heightInch
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
                    ? `${progressData.lost} kg`
                    : calculator.unitOfMeasure === 'S'
                    ? `${progressData.lost} lbs`
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
    </div>
  );
};
