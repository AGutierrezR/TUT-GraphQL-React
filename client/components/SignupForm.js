import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { FETCH_USER, SIGNUP } from '../queries'

import AuthForm from './AuthForm'
import withRequireUnregisterUser from './withRequireUnregisterUser'

const SignupForm = () => {
  const [singupMutation] = useMutation(SIGNUP)
  const [errors, setErrors] = useState([])

  const history = useHistory()

  const onSubmit = ({ email, password }) => {
    singupMutation({
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
      <h3>Sign Up</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  )
}

export default withRequireUnregisterUser(SignupForm)
