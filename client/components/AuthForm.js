import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AuthForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({ email, password })
  }

  return (
    <div className="row">
      <form className="col s6" onSubmit={onSubmit}>
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
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default AuthForm
