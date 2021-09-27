import React from 'react'
import { useQuery, gql } from '@apollo/client'

const SongList = () => {
  const { data, loading, error } = useQuery(query)

  const renderSongs = () => {
    const { songs } = data
    return songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    })
  }

  return <ul className="collection">{loading || renderSongs()}</ul>
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default SongList
