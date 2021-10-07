import React from 'react'
import { useMutation } from '@apollo/client'
import { SIGNUP } from '../queries'

import AuthForm from './AuthForm'

const SignupForm = () => {
  const [singupMutation] = useMutation(SIGNUP)

  console.log(singupMutation)

  return (
    <div>
      <h3>Sign Up</h3>
      <AuthForm />
    </div>
  )
}

export default SignupForm
