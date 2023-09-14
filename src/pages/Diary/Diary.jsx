import React from 'react';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryCalendar from 'components/DiaryCalendar/DiaryCalendar';

import RightSideBar from 'components/RightSideBar/RightSideBar';

// mocking user login to retireve token
import { login } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

function Diary() {
  const dispatch = useDispatch();
  // moock user
  const credentials = {
    email: 'user@example.com',
    password: 'qwerty123',
  };
  // mock user login operation
  dispatch(login(credentials));

  return (
    <div
      className="background Calc-DairyBackground"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ flexGrow: '1' }}>
        <DiaryCalendar />
        <DiaryAddProductForm />
      </div>
      <RightSideBar />
    </div>
  );
}

export default Diary;
