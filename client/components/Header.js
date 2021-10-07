import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'

import { FETCH_USER, LOGOUT } from '../queries'

const Header = () => {
  const { data, loading, error } = useQuery(FETCH_USER)
  const [logoutMutation] = useMutation(LOGOUT)

  const onLogoutClick = () => {
    logoutMutation({
      refetchQueries: [{ query: FETCH_USER }],
    })
  }

  const renderButtons = () => {
    if (loading) {
      return <div />
    }

    if (error) {
      return <p>Error: {error.message}</p>
    }

    const { user } = data

    if (user) {
      return (
        <li>
          <a onClick={onLogoutClick}>Logout</a>
        </li>
      )
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
