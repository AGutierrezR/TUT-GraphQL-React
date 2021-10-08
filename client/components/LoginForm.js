import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { LOGIN, FETCH_USER } from '../queries'

import AuthForm from './AuthForm'
import withRequireUnregisterUser from './withRequireUnregisterUser'

const LoginForm = () => {
  const [loginMutation] = useMutation(LOGIN)
  const [errors, setErrors] = useState([])

  const history = useHistory()

  const onSubmit = ({ email, password }) => {
    loginMutation({
      variables: { email, password },
      refetchQueries: [{ query: FETCH_USER }],
      awaitRefetchQueries: true,
    })
      .then(() => history.push('/dashboard'))
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message)
        setErrors([...errors])
      })
  }

  return (
    <div>
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  )
}

export default withRequireUnregisterUser(LoginForm)
