import s from './rightSideBar.module.css';

export const Stats = ({ stats, progressData }) => {
  let newBloodType;
  switch (progressData.originalDate) {
    case 1:
      newBloodType = 'A';
      break;
    case 2:
      newBloodType = 'B';
      break;
    case 3:
      newBloodType = 'AB';
      break;
    case 4:
      newBloodType = 'O';
      break;
    default:
      newBloodType = stats.bloodType;
      break;
  }

  return (
    <div>
      {stats.enteredDate ? (
        <div className={s.sideBarContentWrapper}>
          <div className={s.sideBarContent}>
            <p className={s.sideBarTitle}>Your stats</p>
            <ul className={s.statsBox}>
              <li className={s.statsBoxItem}>
                <p>Height, cm</p>
                <p>{stats.height}</p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Age</p>
                <p>{stats.age}</p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Current weight, kg</p>
                <p>{stats.currentWeight}</p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Desired weight, kg</p>
                <p>{stats.desiredWeight}</p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Blood type</p>
                <p>{newBloodType}</p>
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
                <p>Original weight, kg</p>
                <p>{progressData.originalWeight}</p>
              </li>
              <li className={s.statsBoxItem}>
                <p>Lost, kg</p>
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
            <p className={s.sideBarTitle}>Hey, stupid, submit a calculator!</p>
          </div>
        </div>
      )}
    </div>
  );
};
