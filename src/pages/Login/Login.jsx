import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Container } from '@mui/material'


function Login() {
  return (
    // imported my form here to see it get rendered 
    <div className=" background mainBackground">
      <LoginForm />
    </div>
  )
}

export default Login