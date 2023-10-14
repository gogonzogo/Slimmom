import s from './rightSideBar.module.css';

export const Stats = ({ calculator, progressData }) => {
  return (
    <div>
      {calculator.startDate ? (
        <div className={s.sideBarContentWrapper}>
          <div className={s.sideBarContent}>
            <p className={s.sideBarTitle}>Your stats</p>
            <ul className={s.statsBox}>
              {calculator.height ? (
                <li className={s.statsBoxItem}>
                  <p>Height, cm</p>
                  <p>{calculator.height}</p>
                </li>
              ) : (
                <li className={s.statsBoxItem}>
                  <p>Height, ft</p>
                  <p>{`${calculator.heightFeet}ft, ${calculator.heightInch}in`}</p>
                </li>
              )}
              <li className={s.statsBoxItem}>
                <p>Age</p>
                <p>{calculator.age}</p>
              </li>
              {calculator.currentWeight ? (
                <li className={s.statsBoxItem}>
                  <p>Current weight, kg</p>
                  <p>{calculator.currentWeight}</p>
                </li>
              ) : (
                <li className={s.statsBoxItem}>
                  <p>Current weight, lbs</p>
                  <p>{calculator.currentWeightLbs}</p>
                </li>
              )}
              <li className={s.statsBoxItem}>
                {calculator.desiredWeight ? (
                  <p>Desired weight, kg</p>
                ) : (
                  <p>Desired weight, lbs</p>
                )}
                <p>{calculator.desiredWeight || calculator.desiredWeightLbs}</p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Blood type</p>
                <p>{calculator.bloodType}</p>
              </li>
            </ul>
          </div>
          <div className={s.sideBarContent}>
            <p className={s.sideBarTitle}>Your progress</p>
            <ul className={s.statsBox}>
              <li className={s.statsBoxItem}>
                <p>Started date</p>
                <p>{progressData.originalDate}</p>
              </li>
              <li className={s.statsBoxItem}>
                {calculator.unitOfMeasure === 'M' ? (
                  <p>Original weight, kg</p>
                ) : (
                  <p>Original weight, lbs</p>
                )}
                <p>{progressData.originalWeight}</p>
              </li>
              <li className={s.statsBoxItem}>
                {calculator.unitOfMeasure === 'M' ? (
                  <p>Lost, kg</p>
                ) : (
                  <p>Lost, lbs</p>
                )}
                <p>{progressData.lost}</p>
              </li>
              <li className={s.statsBoxItem}>
                <p>In</p>
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
