import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { FETCH_USER } from '../queries'

const withRequireUnregisterUser = (BaseComponent) => {
  const HOC = () => {
    const { data, loading } = useQuery(FETCH_USER)
    const history = useHistory()

    useEffect(() => {
      if (!loading && data?.user) {
        history.push('/dashboard')
      }
    })

    return <BaseComponent />
  }

  return HOC
}

export default withRequireUnregisterUser
