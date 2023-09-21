import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Container from 'components/Container/Container'

function Login() {
  return (
    // imported my form here to see it get rendered 
    <div className="background mainBackground">
      <section className="topBottom">
        <Container className="left-right">
          <LoginForm />
        </Container>
      </section>
    </div>
  )
}

export default Login