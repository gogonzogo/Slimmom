import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
import Loader from './Loader/Loader';
import Header from './Header';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Diary = lazy(() => import('pages/Diary/Diary'));
const Calculator = lazy(() => import('pages/Calculator/Calculator'));

export const App = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Suspense>
    </>
  );
};
