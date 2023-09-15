import s from './rightSideBar.module.css';

const RightSideBar = ({ children }) => {
  return <div className={s.sideBarContainer}>{children}</div>;
};
export default RightSideBar;
