import React from 'react';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import Container from 'components/Container/Container';

function Register() {
  return (
    <div className=" background mainBackground">
      <section className="top-bottom">
        <Container className="left-right">
          <RegistrationForm />
        </Container>
      </section>
      <div className='footer-margin'></div>

    </div>
  )
}

export default Register