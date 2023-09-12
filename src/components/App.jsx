import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify

const Home = lazy(() => import('pages/Home/Home'));
const Diary = lazy(() => import('pages/Diary/Diary'));
const Calculator = lazy(() => import('pages/Calculator/Calculator'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  return (
    <div className='app'>
      <Header />
      {/* Add the ToastContainer here */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
};
