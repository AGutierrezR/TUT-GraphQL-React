import { useQuery } from '@apollo/client'
import React from 'react'
import { FETCH_USER } from '../queries/CurrentUser'

const Header = () => {
  const { data, loading } = useQuery(FETCH_USER)

  console.log({ data, loading })

  return <div>Header</div>
}

export default Header
