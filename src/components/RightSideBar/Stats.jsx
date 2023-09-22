import s from './rightSideBar.module.css';

export const Stats = props => {
  const stats = props.stats;

  let newBloodType;
  switch (stats.bloodType) {
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
    <div className={s.sideBarContentWrapper} style={{ justifyContent: 'left' }}>
      <div className={s.sideBarContent}>
        <p className={s.sideBarTitle}>Your stats:</p>
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
    </div>
  );
};
