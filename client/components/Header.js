import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { FETCH_USER } from '../queries/CurrentUser'

const Header = () => {
  const { data, loading, error } = useQuery(FETCH_USER)

  const renderButtons = () => {
    if (loading) {
      return <div />
    }

    if (error) {
      return <p>Error: {error.message}</p>
    }

    const { user } = data

    if (user) {
      return <div>Logout</div>
    }

    return (
      <>
        <li>
          <Link to="signup">Signup</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </>
    )
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  )
}

export default Header
