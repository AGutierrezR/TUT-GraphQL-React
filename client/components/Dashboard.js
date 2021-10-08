import React from 'react'
import withRequireAuth from './withRequireAuth'

const Dashboard = () => {
  return <div>Dashboard! You are logged in.</div>
}

export default withRequireAuth(Dashboard)
