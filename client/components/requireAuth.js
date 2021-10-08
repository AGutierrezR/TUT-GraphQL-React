import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { FETCH_USER } from '../queries'

const requireAuth = (BaseComponent) => {
  const HOC = () => {
    const { data, loading } = useQuery(FETCH_USER)
    const history = useHistory()

    useEffect(() => {
      if (!loading && !data?.user) {
        history.push('/login')
      }
    })

    return <BaseComponent />
  }

  return HOC
}

export default requireAuth
