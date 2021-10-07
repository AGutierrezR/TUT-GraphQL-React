import React from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../queries'

import AuthForm from './AuthForm'

const LoginForm = () => {
  const [loginMutation] = useMutation(LOGIN)

  console.log(loginMutation)

  return (
    <div>
      <h3>Login</h3>
      <AuthForm />
    </div>
  )
}

export default LoginForm
