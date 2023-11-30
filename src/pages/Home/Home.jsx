import React from 'react';
// import { Outlet } from 'react-router-dom';

//import Section from 'components/Section/Section';
import CaloriesCalc from 'components/CaloriesCalc/CaloriesCalc';
import Container from 'components/Container/Container';
//import Container from 'components/Container/Container';

// import { lazy, Suspense } from 'react';
// import Loader from 'components/Loader/Loader';
// const Register = lazy(() => import('../Register/Register'));
// const Login = lazy(() => import('../Login/Login'));
function Home() {

  return (

    <div className={`background mainBackground `}>
      <section className="top-bottom">
        <Container className="left-right">
          <CaloriesCalc />
          {/* <Outlet /> */}
          {/* <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
              </Routes>
            </Suspense> */}
        </Container>
      </section>
      <div className='footer-margin'></div>
    </div>
  );
};

export default Home;
