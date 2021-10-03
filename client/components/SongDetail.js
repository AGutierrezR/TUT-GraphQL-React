import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_SONG } from '../queries/apolloQueries'
import { useParams } from 'react-router-dom'

const SongDetail = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_SONG, { variables: { id } })

  if (loading) return <p>Loading...</p>
  if (!data?.song) return <p>Not found</p>

  const { song } = data

  return (
    <div>
      <h3>{song.title}</h3>
    </div>
  )
}

export default SongDetail
