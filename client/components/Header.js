import React from 'react'
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

    return <div>You&apos;re not signed in.</div>
  }

  return (
    <nav>
      <div className="nav-wrapper">{renderButtons()}</div>
    </nav>
  )
}

export default Header
