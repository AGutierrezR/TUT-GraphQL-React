import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { FETCH_USER, SIGNUP } from '../queries'

import AuthForm from './AuthForm'

const SignupForm = () => {
  const [singupMutation] = useMutation(SIGNUP)
  const [errors, setErrors] = useState([])

  const onSubmit = ({ email, password }) => {
    singupMutation({
      variables: { email, password },
      refetchQueries: [{ query: FETCH_USER }],
    }).catch((res) => {
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

export default SignupForm
