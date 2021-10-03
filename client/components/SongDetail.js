import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_SONG } from '../queries/apolloQueries'
import { useParams } from 'react-router-dom'

const SongDetail = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_SONG, { variables: { id } })

  return (
    <div>
      <h3>Song Detail</h3>
    </div>
  )
}

export default SongDetail
