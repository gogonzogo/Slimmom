//external
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { Box } from '@mui/material';

// internal
import Header from './Header/Header';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Diary = lazy(() => import('pages/Diary/Diary'));
const Calculator = lazy(() => import('pages/Calculator/Calculator'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  return (
    <Box className='app max-width'>
      <Header />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Suspense fallback={<Loader />}>
        <Routes>

          {/** public routes */}
            <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />  
            <Route path="register" element={<PublicRoute><Register /></PublicRoute>} />
            <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
          
          {/** private routes */}
          
            <Route path="/diary" element={<PrivateRoute><Diary /></PrivateRoute>} />
            <Route path="/calculator" element={<PrivateRoute><Calculator /></PrivateRoute>} />
            <Route path="*" element={<h1>404</h1>} />
      
        </Routes>
      </Suspense>
    </Box>
  );
};
