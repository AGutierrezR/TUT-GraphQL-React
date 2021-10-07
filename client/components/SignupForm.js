import React from 'react'
import { useMutation } from '@apollo/client'
import { SIGNUP } from '../queries'

import AuthForm from './AuthForm'

const SignupForm = () => {
  const [singupMutation] = useMutation(SIGNUP)

  const onSubmit = ({ email, password }) => {
    singupMutation({
      variables: { email, password },
    })
  }

  return (
    <div>
      <h3>Sign Up</h3>
      <AuthForm onSubmit={onSubmit} />
    </div>
  )
}

export default SignupForm
