import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AuthForm = ({ onSubmit, errors }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()

    onSubmit({ email, password })
  }

  const renderErrors = () => {
    return (
      errors &&
      errors.map((err) => (
        <div className="errors" key={err}>
          {err}
        </div>
      ))
    )
  }

  return (
    <div className="row">
      <form className="col s6" onSubmit={onFormSubmit}>
        <div className="input-field">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {renderErrors()}
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.array,
}

export default AuthForm
