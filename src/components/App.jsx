import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import { ThemeProvider } from "@emotion/react";

import { lightTheme } from "../theme/Theme/theme";
const Home = lazy(() => import('pages/Home/Home'));
const Diary = lazy(() => import('pages/Diary/Diary'));
const Calculator = lazy(() => import('pages/Calculator/Calculator'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));



export const App = () => {
  return (
    <div className='app'>
    <ThemeProvider theme={lightTheme}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* needs to be wrapped around PublicRoute */}
          <Route path="register" element={<Register />} />
           {/* needs to be wrapped around PublicRoute  */}
          <Route path="login" element={<Login />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </ThemeProvider>
</div>
      );
};
