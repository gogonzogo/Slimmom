import CaloriesCalc from 'components/caloriesCalc/caloriesCalc';
import React from 'react'
import {  Outlet } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
// import Loader from 'components/Loader/Loader';

// const Register = lazy(() => import('../Register/Register'));
// const Login = lazy(() => import('../Login/Login'));

function Home() {
  return (
    <div>
      <p>Home</p>
      <CaloriesCalc />
      <Outlet />
      {/* <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Suspense> */}
    </div>
  );
}

export default Home