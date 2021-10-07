import React from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN, FETCH_USER } from '../queries'

import AuthForm from './AuthForm'

const LoginForm = () => {
  const [loginMutation] = useMutation(LOGIN)

  const onSubmit = ({ email, password }) => {
    loginMutation({
      variables: { email, password },
      refetchQueries: [{ query: FETCH_USER }],
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => error.message)
    })
  }

  return (
    <div>
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit} />
    </div>
  )
}

export default LoginForm
